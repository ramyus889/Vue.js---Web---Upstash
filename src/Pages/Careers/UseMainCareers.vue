<script setup>
import { routeUrl } from '@/router/routes';

const items = [
  {
    id: 1,
    title: 'Mid/Senior Software Engineer - Cloud/SRE',
    text: 'Build the Upstash cloud infrastructure.',
    link: `${routeUrl[13].path}`,
    delay: 100,
    tag: [
      {
        id: 1,
        textTag: 'kubernetes'
      },
      {
        id: 2,
        textTag: 'dockers'
      },
      {
        id: 3,
        textTag: 'linux'
      },
      {
        id: 4,
        textTag: 'aws'
      }
    ]
  },
  {
    id: 2,
    title: 'Software Engineer - Core',
    text: 'Build the Upstash core data platform.',
    link: `${routeUrl[14].path}`,
    delay: 150,
    tag: [
      {
        id: 1,
        textTag: 'golang'
      },
      {
        id: 2,
        textTag: 'java'
      },
      {
        id: 3,
        textTag: 'concurrency'
      },
      {
        id: 4,
        textTag: 'databases'
      },
      {
        id: 5,
        textTag: 'distributed-systems'
      }
    ]
  },
  {
    id: 3,
    title: 'Software Engineer - Frontend',
    text: 'Build our open-source projects and talk to people',
    link: `${routeUrl[15].path}`,
    delay: 200,
    tag: [
      {
        id: 1,
        textTag: 'typescript'
      },
      {
        id: 2,
        textTag: 'nextjs'
      },
      {
        id: 3,
        textTag: 'redis'
      },
      {
        id: 4,
        textTag: 'react'
      },
      {
        id: 5,
        textTag: 'vue'
      },
      {
        id: 6,
        textTag: 'svelte'
      }
    ]
  },
  {
    id: 4,
    title: 'Software Engineer Intern - Cloud/SRE',
    text: 'Build the Upstash cloud infrastructure.',
    link: `${routeUrl[16].path}`,
    delay: 250,
    tag: [
      {
        id: 1,
        textTag: 'linux'
      },
      {
        id: 2,
        textTag: 'aws'
      },
      {
        id: 3,
        textTag: 'any programming language'
      }
    ]
  },
  {
    id: 5,
    title: 'Mid/Senior Software Engineer - DevRel',
    text: 'Build our open-source projects and talk to people',
    link: `${routeUrl[17].path}`,
    delay: 300,
    tag: [
      {
        id: 1,
        textTag: 'typescript'
      },
      {
        id: 2,
        textTag: 'nextjs'
      },
      {
        id: 3,
        textTag: 'redis'
      },
      {
        id: 4,
        textTag: 'react'
      },
      {
        id: 5,
        textTag: 'vue'
      },
      {
        id: 6,
        textTag: 'svelte'
      }
    ]
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[150px]">
    <div class="">
      <div class="flex flex-col items-center text-center">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="lg:text-[60px] sm:text-[40px] text-[30px] lg:leading-[60px] sm:leading-[40px] leading-[33px] font-bold text-white"
        >
          Join Upstash
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="lg:text-[24px] sm:text-[20px] text-[17px] font-semibold"
        >
          Help us build the cutting edge data platform for the serverless era.
        </div>
      </div>
      <div class="flex flex-col gap-[24px] max-w-[688px] mt-[80px]">
        <RouterLink
          :to="item.link"
          v-for="item in items"
          :key="item.id"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
          class="p-6 transition rounded-lg cursor-pointer bg-white/5 group hover:bg-emerald-200/5 md:rounded-3xl md:p-8"
        >
          <div class="font-[700] text-xl text-emerald-400 group-hover:underline">
            {{ item.title }}
          </div>
          <div class="mt-1 opacity-80">{{ item.text }}</div>
          <div class="flex flex-wrap gap-1 mt-6">
            <div
              v-for="tag in item.tag"
              :key="tag.id"
              class="px-3 py-1 rounded bg-white/5 text-zinc-400"
            >
              {{ tag.textTag }}
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
