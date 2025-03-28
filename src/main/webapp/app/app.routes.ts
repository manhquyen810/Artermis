import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Authority } from 'app/shared/constants/authority.constants';
import { navbarRoute } from 'app/shared/layouts/navbar/navbar.route';
import { errorRoute } from 'app/shared/layouts/error/error.route';

const LAYOUT_ROUTES: Routes = [navbarRoute, ...errorRoute];

const routes: Routes = [
    ...LAYOUT_ROUTES,
    {
        path: '',
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
        data: {
            pageTitle: 'home.title',
        },
    },
    {
        path: '',
        loadChildren: () => import('./shared/user-settings/user-settings.route').then((m) => m.routes),
    },
    {
        path: 'admin',
        data: {
            authorities: [Authority.ADMIN],
        },
        canActivate: [UserRouteAccessService],
        loadChildren: () => import('./admin/admin.routes'),
    },
    {
        path: 'privacy',
        loadComponent: () => import('app/core/legal/privacy.component').then((m) => m.PrivacyComponent),
        data: {
            pageTitle: 'artemisApp.legal.privacyStatement.title',
        },
    },
    {
        path: 'privacy/data-exports',
        loadComponent: () => import('app/core/legal/data-export/data-export.component').then((m) => m.DataExportComponent),
        data: {
            authorities: [Authority.USER],
            pageTitle: 'artemisApp.dataExport.title',
        },
    },
    {
        path: 'privacy/data-exports/:id',
        loadComponent: () => import('app/core/legal/data-export/data-export.component').then((m) => m.DataExportComponent),
        data: {
            authorities: [Authority.USER],
            pageTitle: 'artemisApp.dataExport.title',
        },
    },
    {
        path: 'imprint',
        loadComponent: () => import('app/core/legal/imprint.component').then((m) => m.ImprintComponent),
        data: {
            pageTitle: 'artemisApp.legal.imprint.title',
        },
    },
    {
        path: 'about',
        loadComponent: () => import('app/core/about-us/about-us.component').then((m) => m.AboutUsComponent),
        data: {
            pageTitle: 'overview.aboutUs',
        },
    },
    // ===== TEAM ====
    {
        path: 'course-management/:courseId/exercises/:exerciseId/teams',
        loadChildren: () => import('./exercises/shared/team/team.route').then((m) => m.teamRoute),
    },
    {
        path: 'courses/:courseId/exercises/:exerciseId/teams',
        loadChildren: () => import('./exercises/shared/team/team.route').then((m) => m.teamRoute),
    },
    // ===== ACCOUNT ====
    {
        path: 'account',
        children: [
            {
                path: 'activate',
                pathMatch: 'full',
                loadComponent: () => import('./account/activate/activate.component').then((m) => m.ActivateComponent),
                data: {
                    pageTitle: 'activate.title',
                },
            },
            {
                path: 'password',
                pathMatch: 'full',
                loadComponent: () => import('./account/password/password.component').then((m) => m.PasswordComponent),
                data: {
                    authorities: [Authority.USER],
                    pageTitle: 'global.menu.account.password',
                },
                canActivate: [UserRouteAccessService],
            },
            {
                path: 'reset/finish',
                pathMatch: 'full',
                loadComponent: () => import('./account/password-reset/finish/password-reset-finish.component').then((m) => m.PasswordResetFinishComponent),
                data: {
                    pageTitle: 'global.menu.account.password',
                },
            },
            {
                path: 'reset/request',
                pathMatch: 'full',
                loadComponent: () => import('./account/password-reset/init/password-reset-init.component').then((m) => m.PasswordResetInitComponent),
                data: {
                    pageTitle: 'global.menu.account.password',
                },
            },
            {
                path: 'register',
                pathMatch: 'full',
                loadComponent: () => import('./account/register/register.component').then((m) => m.RegisterComponent),
                data: {
                    pageTitle: 'register.title',
                },
            },
            {
                path: 'settings',
                pathMatch: 'full',
                loadComponent: () => import('./account/settings/settings.component').then((m) => m.SettingsComponent),
                data: {
                    authorities: [Authority.USER],
                    pageTitle: 'global.menu.account.settings',
                },
                canActivate: [UserRouteAccessService],
            },
        ],
    },
    // ===== COURSE MANAGEMENT =====
    {
        path: 'course-management',
        loadChildren: () => import('./course/manage/course-management.route').then((m) => m.courseManagementState),
    },
    {
        path: 'course-management/:courseId/programming-exercises/:exerciseId/code-editor',
        loadChildren: () => import('./exercises/programming/manage/code-editor/code-editor-management-routes').then((m) => m.routes),
    },

    {
        path: 'courses',
        loadChildren: () => import('./overview/courses.route').then((m) => m.routes),
    },
    {
        path: 'course-management/:courseId/lectures/:lectureId/attachments/:attachmentId',
        pathMatch: 'full',
        loadComponent: () => import('./lecture/pdf-preview/pdf-preview.component').then((m) => m.PdfPreviewComponent),
    },
    // ===== GRADING SYSTEM =====
    {
        path: 'courses/:courseId/grading-system',
        loadChildren: () => import('./grading-system/grading-system.route').then((m) => m.gradingSystemState),
    },

    {
        path: 'courses/:courseId/exercises/:exerciseId/problem-statement',
        pathMatch: 'full',
        loadComponent: () => import('./overview/exercise-details/problem-statement/problem-statement.component').then((m) => m.ProblemStatementComponent),
    },
    {
        pathMatch: 'full',
        path: 'courses/:courseId/exercises/:exerciseId/problem-statement/:participationId',
        loadComponent: () => import('./overview/exercise-details/problem-statement/problem-statement.component').then((m) => m.ProblemStatementComponent),
    },
    {
        path: 'courses/:courseId/exercises/:exerciseId/participations/:participationId/results/:resultId/feedback',
        pathMatch: 'full',
        loadComponent: () => import('./exercises/shared/feedback/standalone-feedback/standalone-feedback.component').then((m) => m.StandaloneFeedbackComponent),
    },

    // ===== EXAM =====
    {
        path: 'course-management/:courseId/exams',
        loadChildren: () => import('./exam/manage/exam-management.route').then((m) => m.examManagementRoute),
    },
    {
        path: 'courses/:courseId/exams/:examId/grading-system',
        loadChildren: () => import('./grading-system/grading-system.route').then((m) => m.gradingSystemState),
    },
    {
        path: 'courses/:courseId/exams/:examId/exercises/:exerciseId/repository',
        loadChildren: () => import('./exercises/programming/participate/programming-repository.route').then((m) => m.routes),
    },
    {
        path: 'features',
        loadChildren: () => import('./feature-overview/feature-overview.route').then((m) => m.routes),
    },
    {
        path: 'lti',
        loadChildren: () => import('./lti/lti.route').then((m) => m.ltiLaunchRoutes),
    },
    {
        path: 'about-iris',
        pathMatch: 'full',
        loadComponent: () => import('./iris/about-iris/about-iris.component').then((m) => m.AboutIrisComponent),
        data: {
            pageTitle: 'artemisApp.exerciseChatbot.title',
        },
    },
];

export default routes;
