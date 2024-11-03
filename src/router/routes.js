import UseHome from '@/components/UseHome.vue';
import UseHomeAbout from '@/Pages/About/UseHomeAbout.vue';
import UseCloudSRE from '@/Pages/Careers/components/UseCloudSRE.vue';
import UseCore from '@/Pages/Careers/components/UseCore.vue';
import UseDevRel from '@/Pages/Careers/components/UseDevRel.vue';
import UseFrontend from '@/Pages/Careers/components/UseFrontend.vue';
import UseMidCore from '@/Pages/Careers/components/UseMidCore.vue';
import UseHomeCareers from '@/Pages/Careers/UseHomeCareers.vue';
import UseBranch from '@/Pages/Customers/CustomBlog/useBranch.vue';
import UseDing from '@/Pages/Customers/CustomBlog/useDing.vue';
import UseDub from '@/Pages/Customers/CustomBlog/useDub.vue';
import UseMaker from '@/Pages/Customers/CustomBlog/useMaker.vue';
import UseNiftyKit from '@/Pages/Customers/CustomBlog/useNiftyKit.vue';
import UseSweet from '@/Pages/Customers/CustomBlog/useSweet.vue';
import UseTexture from '@/Pages/Customers/CustomBlog/useTexture.vue';
import UseZapier from '@/Pages/Customers/CustomBlog/useZapier.vue';
import UseHomeCustomers from '@/Pages/Customers/UseHomeCustomers.vue';
import UseHomePricing from '@/Pages/Pricing/UseHomePricing.vue';

export const routeUrl = [
  {
    path: '/'
  },
  {
    path: '/Pricing'
  },
  {
    path: '/Customers'
  },
  {
    path: '/Careers'
  },
  {
    path: '/About'
  },
  {
    path: '/useZapier'
  },
  {
    path: '/useBranch'
  },
  {
    path: '/useDing'
  },
  {
    path: '/useMaker'
  },
  {
    path: '/useDub'
  },
  {
    path: '/useNiftyKit'
  },
  {
    path: '/useSweet'
  },
  {
    path: '/useTexture'
  },
  {
    path: '/useMidCore'
  },
  {
    path: '/useCore'
  },
  {
    path: '/useFrontend'
  },
  {
    path: '/useCloudSRE'
  },
  {
    path: '/useDevRel'
  }
];

export const routes = [
  {
    path: `${routeUrl[0].path}`,
    component: UseHome
  },
  {
    path: `${routeUrl[1].path}`,
    component: UseHomePricing
  },
  {
    path: `${routeUrl[2].path}`,
    component: UseHomeCustomers
  },
  {
    path: `${routeUrl[3].path}`,
    component: UseHomeCareers
  },
  {
    path: `${routeUrl[4].path}`,
    component: UseHomeAbout
  },
  {
    path: `${routeUrl[5].path}`,
    component: UseZapier
  },
  {
    path: `${routeUrl[6].path}`,
    component: UseBranch
  },
  {
    path: `${routeUrl[7].path}`,
    component: UseDing
  },
  {
    path: `${routeUrl[8].path}`,
    component: UseMaker
  },
  {
    path: `${routeUrl[9].path}`,
    component: UseDub
  },
  {
    path: `${routeUrl[10].path}`,
    component: UseNiftyKit
  },
  {
    path: `${routeUrl[11].path}`,
    component: UseSweet
  },
  {
    path: `${routeUrl[12].path}`,
    component: UseTexture
  },
  {
    path: `${routeUrl[13].path}`,
    component: UseMidCore
  },
  {
    path: `${routeUrl[14].path}`,
    component: UseCore
  },
  {
    path: `${routeUrl[15].path}`,
    component: UseFrontend
  },
  {
    path: `${routeUrl[16].path}`,
    component: UseCloudSRE
  },
  {
    path: `${routeUrl[17].path}`,
    component: UseDevRel
  }
];
