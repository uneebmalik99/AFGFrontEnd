<template>
    <Announcement/>
    <Blog/>
    </template>
    
    <script>
    import Announcement from './../components/Announcement.vue';
    import Blog from './../components/Blog.vue';

    export default {
      name: "ContactUs",
      components: {
        Announcement,
        Blog
      },
    }
    </script>

    <style>
    
    </style>