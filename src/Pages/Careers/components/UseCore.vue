<script setup>
import UseFooter from '@/components/UseFooter.vue';
</script>
<template>
  <div class="flex place-content-center mt-[160px] px-5">
    <div class="">
      <div class="flex flex-col items-center gap-6">
        <div
          class="text-white sm:text-[60px] min-[400px]:text-[40px] text-[30px] text-center sm:leading-[69px] leading-[40px] font-bold"
        >
          Software Engineer - Core
        </div>
        <div class="flex flex-wrap place-content-center gap-4">
          <div class="text-[18px] flex gap-1">
            <div class="text-white opacity-40 font-semibold">Experience:</div>
            <div class="text-white font-semibold">4+ years</div>
          </div>
          <div class="text-[18px] flex gap-1">
            <div class="text-white opacity-40 font-semibold">Job type:</div>
            <div class="text-white font-semibold">Full time</div>
          </div>
          <div class="text-[18px] flex gap-1">
            <div class="text-white opacity-40 font-semibold">Location:</div>
            <div class="text-white font-semibold">Work from anywhere</div>
          </div>
        </div>
        <div class="flex flex-wrap place-content-center gap-2">
          <div class="rounded bg-white/5 px-3 py-1 text-[16px] font-semibold text-zinc-400">
            golang
          </div>
          <div class="rounded bg-white/5 px-3 py-1 text-[16px] font-semibold text-zinc-400">
            java
          </div>
          <div class="rounded bg-white/5 px-3 py-1 text-[16px] font-semibold text-zinc-400">
            concurrency
          </div>
          <div class="rounded bg-white/5 px-3 py-1 text-[16px] font-semibold text-zinc-400">
            databases
          </div>
          <div class="rounded bg-white/5 px-3 py-1 text-[16px] font-semibold text-zinc-400">
            distributed-systems
          </div>
        </div>
        <a
          href="#"
          class="flex gap-1 items-center transition px-4 sm:px-5 py-1.5 sm:py-2 mt-[16px] mb-[80px] rounded-full bg-emerald-400 text-emerald-950"
        >
          Apply Now <img src="/arrowRightTop.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
  <div class="bg-gradient-to-b from-white/5 to-zinc-950 w-full pt-[40px] px-10">
    <div class="flex place-content-center max-w-[688px] mx-auto">
      <div class="">
        <div class="text-[16px] text-white leading-[27px]">
          At Upstash, we are building the next generation data platform for the serverless and edge
          era. Our cloud platform lets users deploy data services in seconds and immediately start
          using them. For the best quality and flexibility we design and build our data platform
          ourselves. We are looking for new team members to explore and develop the next generation
          database together with us.
        </div>
        <div class="text-[36px] text-white font-bold mt-[64px]">What you'll do at Upstash:</div>
        <ul class="text-white text-[16px] list-disc flex flex-col gap-2 mt-[24px]">
          <li>
            Design, develop and maintain the data platform components (Redis, Kafka, Mongo) for
            Upstash.
          </li>
          <li>Work with the SRE team on deployment of the data services.</li>
          <li>Ensure the quality and performance of the software you build by writing tests.</li>
          <li>Give technical support when required.</li>
        </ul>
        <div class="text-[36px] text-white font-bold mt-[64px]">
          We'd love to hear from you if you have:
        </div>
        <ul class="text-white text-[16px] list-disc flex flex-col gap-2 mt-[24px]">
          <li>Passion to learn and try new things.</li>
          <li>Deep care about the quality of the software you build.</li>
          <li>Good Golang and/or Java knowledge.</li>
          <li>Experience with multi thread programming.</li>
          <li>Experience with network programming.</li>
          <li>Experience with designing and building distributed systems.</li>
          <li>Experience with designing databases.</li>
        </ul>
        <div class="text-[36px] text-white font-bold mt-[64px]">Nice to have</div>
        <ul class="text-white text-[16px] list-disc flex flex-col gap-2 mt-[24px]">
          <li>Contributions to open source projects</li>
          <li>AWS/Kubernetes experience.</li>
          <li>Experience with Network programming.</li>
          <li>Experience with Kafka, Redis, Mongo and ElasticSearch.</li>
        </ul>
        <div class="text-[36px] text-white font-bold mt-[64px]">What we offer</div>
        <ul class="text-white text-[16px] list-disc flex flex-col gap-2 mt-[24px]">
          <li>Competitive salary</li>
          <li>Stock options</li>
          <li>Work from anywhere in the world</li>
          <li>Budget for events and tech talks</li>
        </ul>
        <div class="text-[36px] text-white font-bold mt-[64px]">How to apply</div>
        <div class="text-[16px] text-white leading-[27px] mt-[24px]">
          Email us at <a href="#" class="text-[#34d399] hover:underline">jobs@upstash.com</a> and
          tell us why you're excited to join Upstash! To give the team a better understanding of who
          you are as a whole person, let us know what you are passionate about, and share an example
          of a project, job, or skill that you’ve picked up on your own. You can attach your resume
          or give a link to your Linkedin profile.
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <UseFooter />
  </div>
</template>
