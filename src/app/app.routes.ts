import { Routes } from '@angular/router';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component'
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('@products/pages/list/list.component')
            },{
                path: 'about',
                loadComponent: () => import('./domains/info/pages/about/about.component').then(m => m.AboutComponent)
            },{
                path: 'product/:id',
                loadComponent: () => import('@products/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
            }
        ]
    },{
        path: '**',
        component: NotFoundComponent
    }

    //vistas anidadas permiten compartir una estrucura desde un layout
    //los que estan fuera de este no comparten el componente
];
