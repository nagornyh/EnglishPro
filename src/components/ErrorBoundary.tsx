import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  /** Optional custom fallback UI. Receives error and a resetFn. */
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Global Error Boundary — catches any unhandled render-time errors and
 * displays a recovery UI instead of crashing the entire app.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log to console in development; swap for a real service if needed
    console.error('[ErrorBoundary] Uncaught error:', error, info.componentStack);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  /** Returns true for errors caused by stale React context (e.g. after HMR module invalidation). */
  private isContextError(error: Error): boolean {
    return error.message.includes('must be used within a') || error.message.includes('useContext');
  }

  handleRetry = () => {
    // Context errors mean the module graph is stale (common after HMR). A full
    // reload restores the correct module references; a simple state reset won't.
    if (this.state.error && this.isContextError(this.state.error)) {
      window.location.reload();
    } else {
      this.reset();
    }
  };

  render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError && error) {
      if (fallback) return fallback(error, this.handleRetry);

      return (
        <div
          role="alert"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 p-6"
        >
          <div className="max-w-md w-full bg-dark-800 rounded-2xl p-8 border border-red-500/30 text-center space-y-6">
            <div className="text-6xl">⚠️</div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Algo ha salido mal
              </h1>
              <p className="text-gray-400 text-sm">
                La aplicación encontró un error inesperado. Tus datos están
                guardados en IndexedDB y no se perderán.
              </p>
            </div>

            {/* Error detail — only shown in development */}
            {import.meta.env.DEV && (
              <details className="text-left bg-dark-900 rounded-lg p-4">
                <summary className="text-red-400 text-sm cursor-pointer font-mono mb-2">
                  {error.name}: {error.message}
                </summary>
                <pre className="text-gray-500 text-xs overflow-auto max-h-48 whitespace-pre-wrap">
                  {error.stack}
                </pre>
              </details>
            )}

            <div className="flex flex-col gap-3">
              <button
                onClick={this.handleRetry}
                className="w-full py-3 px-6 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-xl transition-colors"
              >
                Intentar de nuevo
              </button>
              <button
                onClick={() => window.location.assign('/')}
                className="w-full py-3 px-6 bg-dark-700 hover:bg-dark-600 text-gray-300 font-medium rounded-xl transition-colors"
              >
                Volver al inicio
              </button>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
