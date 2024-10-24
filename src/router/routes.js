import UseHome from '@/components/UseHome.vue';
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

export const routes = [
  {
    path: '/',
    component: UseHome
  },
  {
    path: '/Pricing',
    component: UseHomePricing
  },
  {
    path: '/Customers',
    component: UseHomeCustomers
  },
  {
    path: '/Careers',
    component: UseHomeCareers
  },
  {
    path: '/useZapier',
    component: UseZapier
  },
  {
    path: '/useBranch',
    component: UseBranch
  },
  {
    path: '/useDing',
    component: UseDing
  },
  {
    path: '/useMaker',
    component: UseMaker
  },
  {
    path: '/useDub',
    component: UseDub
  },
  {
    path: '/useNiftyKit',
    component: UseNiftyKit
  },
  {
    path: '/useSweet',
    component: UseSweet
  },
  {
    path: '/useTexture',
    component: UseTexture
  },
  {
    path: '/useMidCore',
    component: UseMidCore
  },
  {
    path: '/useCore',
    component: UseCore
  },
  {
    path: '/useFrontend',
    component: UseFrontend
  },
  {
    path: '/useCloudSRE',
    component: UseCloudSRE
  },
  {
    path: '/useDevRel',
    component: UseDevRel
  }
];
