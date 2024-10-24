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
          Mid/Senior Software <br />
          Engineer - DevRel
        </div>
        <div class="flex flex-wrap place-content-center gap-4">
          <div class="text-[18px] flex gap-1">
            <div class="text-white opacity-40 font-semibold">Experience:</div>
            <div class="text-white font-semibold">3+ years</div>
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
            typescript
          </div>
          <div class="rounded bg-white/5 px-3 py-1 text-[16px] font-semibold text-zinc-400">
            nextjs
          </div>
          <div class="rounded bg-white/5 px-3 py-1 text-[16px] font-semibold text-zinc-400">
            redis
          </div>
          <div class="rounded bg-white/5 px-3 py-1 text-[16px] font-semibold text-zinc-400">
            react
          </div>
          <div class="rounded bg-white/5 px-3 py-1 text-[16px] font-semibold text-zinc-400">
            vue
          </div>
          <div class="rounded bg-white/5 px-3 py-1 text-[16px] font-semibold text-zinc-400">
            svelte
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
          using them.
        </div>
        <div class="text-[36px] text-white font-bold mt-[64px]">About the Role</div>
        <div class="text-[16px] text-white leading-[27px]">
          We're looking for an Open Source and Developer Relations Engineer. Your responsibilities
          will revolve around the care and progression of our open-source projects, which includes
          maintaining, documenting and creating OSS projects. Additionally, you'll be the voice of
          Upstash within our developer community, helping to answer questions, provide support, and
          encourage an inclusive and vibrant atmosphere.
        </div>
        <div class="text-[36px] text-white font-bold mt-[64px]">Your Day-to-Day:</div>
        <ul class="text-white text-[16px] list-disc flex flex-col gap-2 mt-[24px]">
          <li>
            Maintain our open-source projects, which includes resolving issues, implementing new
            features, and improving the overall quality of the codebase.
          </li>
          <li>
            Come up with new ideas for open-source projects that will help developers build better
            applications and implement them.
          </li>
          <li>
            Build new examples and demos to showcase the capabilities of Upstash together with other
            technologies.
          </li>
          <li>
            Be our ambassador within the developer community, providing answers, offering support,
            and cultivating a warm, inclusive atmosphere.
          </li>
          <li>
            Collaborate with our internal product and engineering teams, relaying feedback and
            insights gathered from the developer community.
          </li>
          <li>
            Champion our platform and open-source projects to increase their visibility and
            adoption.
          </li>
        </ul>
        <div class="text-[36px] text-white font-bold mt-[64px]">
          We'd love to hear from you if you have:
        </div>
        <ul class="text-white text-[16px] list-disc flex flex-col gap-2 mt-[24px]">
          <li>Prior experience contributing to open-source projects. (Even if it's your own)</li>
          <li>Deep care about the quality of the software you build.</li>
          <li>Experience with full-stack technologies, like Next.js and others.</li>
          <li>
            Cloud platform/services experience, especially Vercel, AWS, Cloudflare and Netlify
          </li>
        </ul>
        <div class="text-[36px] text-white font-bold mt-[64px]">Nice to have</div>
        <ul class="text-white text-[16px] list-disc flex flex-col gap-2 mt-[24px]">
          <li>Experienced painpoints in serverless applications and have ideas to improve it</li>
          <li>Contributions to other open source projects</li>
          <li>Vue.js, Nuxt, Svelte or Remix experience</li>
          <li>An eye for design and UX</li>
          <li>Python or Rust experience</li>
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
