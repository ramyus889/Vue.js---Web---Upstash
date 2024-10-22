<script setup>
import UseCardPricing from '@/Pages/Pricing/componentsPricing/UseCardPricing.vue';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import UseCardPricing2 from './UseCardPricing2.vue';
import UseCardPricing3 from './UseCardPricing3.vue';

const items = [
  {
    id: 1,
    name: 'Free',
    price: '$0',
    textPrice: '-',
    delay: 100,
    text: 'Perfect for prototypes and hobby projects.',
    textCommand: '10,000 commands daily',
    buttonColor: 'bg-zinc-50',
    items2: [
      {
        id: 1,
        icon: '/Pricing/persistence.svg',
        text: 'Persistence',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 2,
        icon: '/Pricing/RESTAPI.svg',
        text: 'REST API',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 3,
        icon: '/Pricing/TLS.svg',
        text: 'TLS',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 4,
        icon: '/Pricing/global.svg',
        text: 'Global',
        borderClass: 'border border-transparent bg-white/10 opacity-30'
      },
      {
        id: 5,
        icon: '/Pricing/UptimeSLA.svg',
        text: 'Uptime SLA',
        borderClass: 'border border-transparent bg-white/10 opacity-30'
      },
      {
        id: 6,
        icon: '/Pricing/RBAC.svg',
        text: 'RBAC',
        borderClass: 'border border-transparent bg-white/10 opacity-30'
      },
      {
        id: 7,
        icon: '/Pricing/SOC-2.svg',
        text: 'SOC-2',
        borderClass: 'border border-transparent bg-white/10 opacity-30'
      },
      {
        id: 8,
        icon: '/Pricing/monitoring.svg',
        text: 'Monitoring',
        borderClass: 'border border-transparent bg-white/10 opacity-30'
      }
    ]
  },
  {
    id: 2,
    name: 'Pay as you go',
    price: '$0.2',
    delay: 200,
    textPrice: 'per 100K commands',
    borderClass: 'border-2 border-white/20',
    text: 'Flexible pricing for variable traffic.',
    textCommand: '1,000 commands per second',
    buttonColor: 'bg-emerald-400',
    items2: [
      {
        id: 1,
        icon: '/Pricing/persistence.svg',
        text: 'Persistence',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 2,
        icon: '/Pricing/RESTAPI.svg',
        text: 'REST API',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 3,
        icon: '/Pricing/TLS.svg',
        text: 'TLS',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 4,
        icon: '/Pricing/global.svg',
        text: 'Global',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 5,
        icon: '/Pricing/UptimeSLA.svg',
        text: 'Uptime SLA',
        borderClass: 'border border-transparent bg-white/10 opacity-30'
      },
      {
        id: 6,
        icon: '/Pricing/RBAC.svg',
        text: 'RBAC',
        borderClass: 'border border-transparent bg-white/10 opacity-30'
      },
      {
        id: 7,
        icon: '/Pricing/SOC-2.svg',
        text: 'SOC-2',
        borderClass: 'border border-transparent bg-white/10 opacity-30'
      },
      {
        id: 8,
        icon: '/Pricing/monitoring.svg',
        text: 'Monitoring',
        borderClass: 'border border-transparent bg-white/10 opacity-30'
      }
    ]
  },
  {
    id: 3,
    name: 'Pro 2K',
    price: '$280',
    delay: 300,
    priceM: '/ month',
    textPrice: '+$100 ✕ read region',
    text: 'Unlimited commands and high performance for a fixed price.',
    textCommand: '2,000 commands per second',
    buttonColor: 'bg-zinc-50',
    items2: [
      {
        id: 1,
        icon: '/Pricing/persistence.svg',
        text: 'Persistence',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 2,
        icon: '/Pricing/RESTAPI.svg',
        text: 'REST API',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 3,
        icon: '/Pricing/TLS.svg',
        text: 'TLS',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 4,
        icon: '/Pricing/global.svg',
        text: 'Global',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 5,
        icon: '/Pricing/UptimeSLA.svg',
        text: 'Uptime SLA',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 6,
        icon: '/Pricing/RBAC.svg',
        text: 'RBAC',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 7,
        icon: '/Pricing/SOC-2.svg',
        text: 'SOC-2',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      },
      {
        id: 8,
        icon: '/Pricing/monitoring.svg',
        text: 'Monitoring',
        textColor: 'border-emerald-400/10 bg-emerald-400/5 text-emerald-100'
      }
    ]
  }
];

const itemsVector = [
  {
    id: 1,
    name: 'Free',
    price: '$0',
    textPrice: '-',
    limit: '10k',
    delay: 100,
    text: 'Perfect for prototypes and hobby projects.'
  },
  {
    id: 2,
    name: 'Pay as you go',
    price: '$0.4',
    delay: 200,
    textPrice: 'per 100K requests',
    limit: 'Unlimited',
    borderClass: 'border-2 border-white/20',
    text: 'For use cases with bursting traffic'
  },
  {
    id: 3,
    name: 'Fixed',
    price: '$280',
    delay: 300,
    priceM: '/ month',
    limit: '10M',
    textPrice: '-',
    text: 'For consistent loads with predictable costs'
  }
];
const itemsQStash = [
  {
    id: 1,
    name: 'Free',
    price: '$0',
    textPrice: '-',
    delay: 100,
    limit: '10k',
    limit2: '100',
    text: 'Perfect for prototypes and hobby projects.'
  },
  {
    id: 2,
    name: 'Pay as you go',
    price: '$1',
    textPrice: 'per 100K messages',
    delay: 200,
    limit: 'Unlimited',
    limit2: '100',
    borderClass: 'border-2 border-white/20',
    text: 'For use cases with bursting traffic'
  },
  {
    id: 3,
    name: 'Pro',
    price: '$180',
    priceM: '/ month',
    delay: 300,
    limit: '10M',
    limit2: 'Up to 1000',
    textPrice: 'Starting from',
    text: 'For businesses with consistent high-capacity loads and predictable costs.'
  }
];
</script>
<template>
  <div class="card">
    <Tabs value="0">
      <TabList
        data-aos="fade-up"
        data-aos-delay="100"
        class="mt-[52px] mb-[80px] w-[335px] mx-auto"
      >
        <Tab value="0" as="div" class="flex items-center sm:gap-2 gap-1">
          <div class="flex items-center gap-2">
            <img src="/redisAPI.svg" alt="" class="w-[24px]" />
            <div class="font-bold whitespace-nowrap">Redis</div>
          </div>
        </Tab>
        <Tab value="1" as="div" class="flex items-center sm:gap-2 gap-1">
          <div class="flex items-center gap-2">
            <img src="/vector.svg" alt="" class="w-[24px]" />
            <div class="font-bold whitespace-nowrap">Vector</div>
          </div>
        </Tab>
        <Tab value="2" as="div" class="flex items-center sm:gap-2 gap-1">
          <div class="flex items-center gap-2">
            <img src="/QStash.svg" alt="" class="w-[24px]" />
            <div class="font-bold whitespace-nowrap">QStash</div>
          </div>
        </Tab>
      </TabList>
      <TabPanels class="!bg-transparent">
        <TabPanel value="0" as="div">
          <div class="grid lg:grid-cols-3 grid-cols-1 place-content-center gap-[24px]">
            <UseCardPricing
              v-for="item in items"
              :key="item.id"
              :items2="item.items2"
              :delay="item.delay"
              :name="item.name"
              :price="item.price"
              :borderClass="item.borderClass"
              :priceM="item.priceM"
              :textPrice="item.textPrice"
              :text="item.text"
              :textCommand="item.textCommand"
              :buttonColor="item.buttonColor"
            />
          </div>
        </TabPanel>
        <TabPanel value="1" as="div">
          <div class="grid lg:grid-cols-3 grid-cols-1 place-content-center gap-[24px]">
            <UseCardPricing2
              v-for="item in itemsVector"
              :key="item.id"
              :delay="item.delay"
              :name="item.name"
              :limit="item.limit"
              :price="item.price"
              :borderClass="item.borderClass"
              :priceM="item.priceM"
              :textPrice="item.textPrice"
              :text="item.text"
            />
          </div>
        </TabPanel>
        <TabPanel value="2" as="div">
          <div class="grid lg:grid-cols-3 grid-cols-1 place-content-center gap-[24px]">
            <UseCardPricing3
              v-for="item in itemsQStash"
              :key="item.id"
              :delay="item.delay"
              :name="item.name"
              :limit="item.limit"
              :limit2="item.limit2"
              :price="item.price"
              :borderClass="item.borderClass"
              :priceM="item.priceM"
              :textPrice="item.textPrice"
              :text="item.text"
            />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>
