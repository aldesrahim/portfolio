<script setup>
import MainLayout from '@/components/MainLayout.vue'
import Paragraphs from '@/components/Paragraphs.vue'

let paragraphs = [
  `Hi again, maybe you already know me, my name is Ahmad Al Desrahim, you can call me <code>aldes</code>, I am from Indonesia.`,
  `I am currently a college student at <a href="https://unindra.ac.id/" target="_blank">UNINDRA</a> majoring Informatics Engineering, I am also a Web Developer at <a href="https://ftfservices.biz" target="_blank">PT. FTF Globalindo</a>.`,
  `About my previous education, I graduated from <a href="https://www.smkn24jkt.sch.id/" target="_blank">Vocational High School 24 in Jakarta</a> majoring Software Engineering (<abbr title="Rekaya Perangkat Lunak which is Software Engineering in English">RPL</abbr>). I've learned a lot from this school, I started learning C++, Java and PHP. And not just that, I also learned about networking, basics of system operations, some diagrams or charts and Database Management System (DBMS).`,
  `Let's talk about my programming skills, maybe you already know what my main coding language is, yes it's PHP.  I've used it since high school, and I really enjoyed it. I also have knowledge on several PHP Frameworks such as <a href="https://laravel.com/" target="_blank">Laravel</a>, <a href="https://codeigniter.com/user_guide" target="_blank">Codeigniter</a> I even tried <a href="https://www.yiiframework.com/" target="_blank">Yii2</a>.`,
  `But not just that, I also understand (a lot of) Javascript, a little Java and <span title="It's just a simple webview app :)" class="cursor-help fst-italic">Kotlin</span>. I also using <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>, <a href="https://alpinejs.dev/" target="_blank">AlpineJS</a>, <a href="https://laravel-livewire.com/" target="_blank">Livewire</a> on several projects.`,
  `The last part is a little about myself: I really like when it comes to problem-solving, it's just, I like to brainstorming myself just to find the most efficient way to implement something to my codebase. Although it seems not that important (probably for some people) and sometimes it makes my code a little longer to finish (I got to say it's like a double-edged sword for me), I really enjoyed the process.`,
]
</script>

<template>
  <MainLayout>
    <template #header>
      <h1 class="display-2">
        About Me
      </h1>
    </template>
    <Paragraphs :lines="paragraphs"/>
  </MainLayout>
</template>