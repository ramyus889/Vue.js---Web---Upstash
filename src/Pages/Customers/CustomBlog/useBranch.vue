<script setup>
import UseFooter from '@/components/UseFooter.vue';

const adaptive =
  'min-[2300px]:mx-[570px] min-[2250px]:mx-[600px] min-[2125px]:mx-[550px] min-[2050px]:mx-[500px] min-[1920px]:mx-[450px] min-[1850px]:mx-[350px] min-[1750px]:mx-[250px] min-[1450px]:mx-[200px] min-[1330px]:mx-[150px] xl:mx-[100px]';
</script>
<template>
  <div :class="adaptive" class="border-white/5 border-b px-5">
    <RouterLink
      class="text-white opacity-40 hover:opacity-80 py-4 w-full inline-flex"
      to="/Customers"
      >← Back to Customers</RouterLink
    >
  </div>
  <div class="flex place-content-center mt-[90px] px-5">
    <div class="">
      <img src="/Customers/Branch.webp" alt="" class="w-[1000px] rounded-xl" />
      <div class="flex flex-col mt-20 max-w-[688px] mx-auto">
        <div class="text-[20px] text-white leading-[30px] font-semibold">
          Branch is a personal insurance carrier built on advanced technology that offers affordable
          home and auto insurance to users. Branch is the only carrier that allows customers to
          instantly bundle home and auto coverage, and also allow to purchase renters, condo, and
          umbrella insurance. Branch is a series-C startup with a valuation over a billion dollars.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          An entirely serverless tech stack allowing to have a lean development team
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          Branch’s tech stack is entirely serverless which is rare in a highly regulated industries
          like insurance. They have been following the managed services philosophy to offload
          undifferentiated heavy lifting to vendors and focus all of their software development
          resources on things that differentiate Branch from others. As a result, they managed to
          have an extremely lean software development team of around 20 people while still
          delivering new features and launching products in new states much faster than was
          previously thought possible.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          Beyond AWS: Picking the Right Tool for the Task
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          Branch mainly rely on AWS as primary cloud provider, use GraphQL with AWS AppSync in all
          their applications, compute on AWS Lambda, primary database on DynamoDB, Cognito as
          authentication provider. However their approach has been not to limit themselves to AWS
          only but to pick the best tools for the job -- which is why they also use multiple other
          vendors such as Algolia, Neon, and of course Upstash for Redis workload.
        </div>
      </div>
      <div
        class="flex place-content-center items-center gap-6 rounded-3xl border-4 border-white/5 p-10 text-center md:px-20 md:py-16 mt-[40px]"
      >
        <div class="flex flex-col gap-6 items-center">
          <img src="/Customers/adithya.webp" class="rounded-full w-[64px] h-[64px]" alt="" />
          <div
            class="bg-gradient-to-br from-white to-[#6DBEA6] bg-clip-text text-xl max-w-[690px] text-center font-semibold text-transparent"
          >
            The biggest compliment that we can give Upstash is that we've never had to think about
            it since we adopted it. If a developer thinks it's appropriate to use Redis to solve a
            problem, they just use Upstash without having to think about load / memory usage /
            storage size / number of connections / any other resource constraints.
          </div>
          <div class="flex items-center">
            <div class="text-white opacity-80 text-[16px]">Adithya</div>
            <div class="text-white opacity-40">, Software Engineering Manager</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <UseFooter />
  </div>
</template>
