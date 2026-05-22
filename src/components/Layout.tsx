import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  BookOpen, 
  Trophy, 
  BarChart3, 
  Settings, 
  Menu, 
  X,
  Flame,
  Zap,
  LogOut,
  User,
  Map,
  Swords,
  Library,
  TreeDeciduous,
  ChevronRight
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import SaveProgressButton from './SaveProgressButton';

const navItems = [
  { path: '/', icon: Home, label: 'Inicio' },
  { path: '/levels', icon: BookOpen, label: 'Niveles' },
  { path: '/study-plan', icon: Map, label: 'Plan de Estudio' },
  { path: '/practice', icon: Zap, label: 'Práctica' },
  { path: '/challenges', icon: Swords, label: 'Desafíos' },
  { path: '/grammar-explorer', icon: TreeDeciduous, label: 'Gramática' },
  { path: '/notebook', icon: Library, label: 'Mi Cuaderno' },
  { path: '/progress', icon: BarChart3, label: 'Progreso' },
  { path: '/achievements', icon: Trophy, label: 'Logros' },
];

/** Breadcrumb route labels */
const routeLabels: Record<string, string> = {
  '/': 'Inicio',
  '/levels': 'Niveles',
  '/study-plan': 'Plan de Estudio',
  '/practice': 'Práctica',
  '/challenges': 'Desafíos',
  '/grammar-explorer': 'Gramática',
  '/notebook': 'Mi Cuaderno',
  '/progress': 'Progreso',
  '/achievements': 'Logros',
  '/settings': 'Configuración',
  '/collection': 'Colección',
  '/error-review': 'Revisión de Errores',
  '/exam': 'Examen',
  '/stories': 'Historias',
  '/reading': 'Lectura',
  '/grammar': 'Gramática',
  '/phrases': 'Frases',
  '/idioms': 'Modismos',
  '/regional': 'Variantes',
  '/review': 'Repaso',
  '/scenarios': 'Escenarios',
  '/words': 'Palabras',
  '/quick': 'Lección Rápida',
  '/trouble-words': 'Palabras Difíciles',
  '/sentences': 'Oraciones',
  '/change-level': 'Cambiar Nivel',
};

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const location = useLocation();
  const isLessonFlow = location.pathname.startsWith('/lesson/');

  // Close mobile sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Build breadcrumbs from current path
  const breadcrumbs = buildBreadcrumbs(location.pathname);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 flex">
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
      >
        Saltar al contenido principal
      </a>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-strong px-4 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Abrir menú de navegación"
            aria-expanded={sidebarOpen}
            aria-controls="mobile-sidebar"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
          
          <Link to="/" className="flex items-center gap-2" aria-label="EnglishPro - Ir a inicio">
            <span className="text-2xl" aria-hidden="true">🎓</span>
            <span className="font-display font-bold text-xl gradient-text">EnglishPro</span>
          </Link>

          <div className="w-6" aria-hidden="true" />
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden modal-overlay z-40"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              id="mobile-sidebar"
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 z-50 p-6 border-r border-dark-500"
              style={{ width: '280px', backgroundColor: 'rgba(18, 18, 26, 0.98)' }}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display font-bold text-xl gradient-text">EnglishPro</span>
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-gray-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <NavContent currentPath={location.pathname} onClose={() => setSidebarOpen(false)} collapsed={false} />
              </div>
              <div className="mt-4 pt-4 border-t border-dark-500">
                <SaveProgressButton floating={false} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar — in-flow, hover to expand */}
      <aside
        onMouseEnter={() => setSidebarHovered(true)}
        onMouseLeave={() => setSidebarHovered(false)}
        className={`hidden lg:flex flex-col flex-shrink-0 border-r border-dark-500/50 transition-[width] duration-300 ease-in-out overflow-hidden ${
          sidebarHovered ? 'w-72 shadow-2xl shadow-black/60' : 'w-2'
        }`}
        style={{ backgroundColor: 'rgba(18, 18, 26, 0.98)' }}
      >
        {/* Thin accent strip — visible when collapsed */}
        <div
          className={`absolute inset-y-0 left-0 w-2 transition-opacity duration-200 pointer-events-none ${
            sidebarHovered ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ background: 'linear-gradient(to bottom, var(--color-accent-primary, #6c63ff), transparent)' }}
        />

        {/* Full sidebar content */}
        <div
          className={`flex flex-col flex-1 min-h-0 transition-opacity duration-200 ${
            sidebarHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ width: '288px' }}
        >
          <div className="flex items-center gap-3 p-6">
            <Link to="/" className="flex items-center gap-3">
              <span className="text-3xl">🎓</span>
              <span className="font-display font-bold text-2xl gradient-text whitespace-nowrap">EnglishPro</span>
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto px-3">
            <NavContent currentPath={location.pathname} collapsed={false} />
          </div>
          <div className="p-4 border-t border-dark-500">
            <SaveProgressButton floating={false} />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main 
        id="main-content" 
        className={`flex-1 pt-16 lg:pt-0 min-h-screen overflow-x-hidden w-full min-w-0 main-content-area ${
          isLessonFlow ? 'flex flex-col min-h-0' : ''
        }`}
        role="main"
        aria-label="Contenido principal"
      >
        <div
          className={`w-full min-w-0 ${
            isLessonFlow 
              ? 'flex-1 flex flex-col min-h-0 p-4 lg:p-6' 
              : 'py-4 lg:py-8'
          }`}
        >
          {/* Breadcrumbs — not shown in lesson flow or home */}
          {!isLessonFlow && location.pathname !== '/' && breadcrumbs.length > 1 && (
            <div className="page-container mb-4">
              <nav className="breadcrumb" aria-label="Ruta de navegación">
                {breadcrumbs.map((crumb, i) => (
                  <span key={crumb.path} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="w-3.5 h-3.5 breadcrumb-separator" aria-hidden="true" />}
                    {i < breadcrumbs.length - 1 ? (
                      <Link to={crumb.path}>{crumb.label}</Link>
                    ) : (
                      <span className="text-gray-300 font-medium">{crumb.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            </div>
          )}
          
          <div className={isLessonFlow ? 'flex-1 flex flex-col min-h-0' : 'page-container'}>
            <Outlet />
          </div>
        </div>
      </main>

    </div>
  );
}

function buildBreadcrumbs(pathname: string): { path: string; label: string }[] {
  const crumbs: { path: string; label: string }[] = [{ path: '/', label: 'Inicio' }];
  
  if (pathname === '/') return crumbs;

  // Handle dynamic segments
  const parts = pathname.split('/').filter(Boolean);
  
  if (parts[0] === 'level' && parts[1]) {
    crumbs.push({ path: '/levels', label: 'Niveles' });
    crumbs.push({ path: `/level/${parts[1]}`, label: `Nivel ${parts[1]}` });
    if (parts[2] === 'task' && parts[3]) {
      crumbs.push({ path: pathname, label: `Tarea ${parts[3]}` });
    }
    return crumbs;
  }

  if (parts[0] === 'lesson') {
    crumbs.push({ path: '/levels', label: 'Niveles' });
    if (parts[1]) crumbs.push({ path: `/level/${parts[1]}`, label: `Nivel ${parts[1]}` });
    crumbs.push({ path: pathname, label: 'Lección' });
    return crumbs;
  }

  if (parts[0] === 'task-complete') {
    crumbs.push({ path: '/levels', label: 'Niveles' });
    crumbs.push({ path: pathname, label: 'Tarea Completada' });
    return crumbs;
  }

  if (parts[0] === 'practice' && parts[1]) {
    crumbs.push({ path: '/practice', label: 'Práctica' });
    crumbs.push({ path: pathname, label: parts[1].charAt(0).toUpperCase() + parts[1].slice(1) });
    return crumbs;
  }

  const label = routeLabels[pathname];
  if (label) {
    crumbs.push({ path: pathname, label });
  }

  return crumbs;
}

function NavContent({ currentPath, onClose, collapsed }: { currentPath: string; onClose?: () => void; collapsed: boolean }) {
  const { user, logout } = useUser();

  return (
    <div className="flex flex-col h-full">
      {/* User Stats */}
      {user && !collapsed && (
        <div className="mb-6 p-4 glass rounded-xl" role="region" aria-label="Estadísticas del usuario">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div className="nav-user-info min-w-0">
              <p className="font-semibold text-white truncate">{user.name}</p>
              <p className="text-sm text-gray-400">Nivel {user.progress.currentLevel}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" aria-hidden="true" />
              <span className="text-sm text-gray-300">{user.streakData.currentStreak} días</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent-primary" aria-hidden="true" />
              <span className="text-sm text-gray-300">{user.progress.totalXP} XP</span>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed user avatar */}
      {user && collapsed && (
        <div className="mb-6 flex justify-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center">
            <User className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 space-y-1" role="navigation" aria-label="Navegación principal">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              aria-current={isActive ? 'page' : undefined}
              className={`
                nav-link flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                ${collapsed ? 'justify-center px-0' : ''}
                ${isActive 
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-accent-primary/30' 
                  : 'text-gray-400 hover:text-white hover:bg-dark-600'
                }
              `}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <span className="font-medium nav-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto space-y-1 pt-4 border-t border-dark-500">
        <Link
          to="/settings"
          onClick={onClose}
          className={`nav-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-dark-600 transition-all ${collapsed ? 'justify-center px-0' : ''}`}
          title={collapsed ? 'Configuración' : undefined}
        >
          <Settings className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <span className="font-medium nav-label">Configuración</span>
        </Link>
        
        {user && (
          <button
            onClick={() => {
              logout();
              onClose?.();
            }}
            className={`w-full nav-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all ${collapsed ? 'justify-center px-0' : ''}`}
            aria-label="Cerrar sesión"
            title={collapsed ? 'Cerrar Sesión' : undefined}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span className="font-medium nav-label">Cerrar Sesión</span>
          </button>
        )}
      </div>
    </div>
  );
}
