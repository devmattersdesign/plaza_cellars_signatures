<template>
    <div class="container">
        <div class="row" style="padding-top:100px;">
            <div class="col-12">
                <img :src="logo" alt="Logo" width="200">
                <h1 style="margin-top:50px;color:#000000;">Email signatures</h1>
            </div>
        </div>
        <div class="row d-flex align-items-center" style="padding-top:20px;">
            <div class="col-12 col-xl-5">
                <code style="color:#000000;">
                    <strong>Please follow these instructions:<br><br></strong>
                    <ol style="color:#000000;">
                        <li>Make sure you're using <strong><u>Firefox</u></strong></li>
                        <li>Select one signature below</li>
                        <li>Press ⌘ + A and then ⌘ + C to copy everything</li>
                        <li>Open your email client, go to the signature settings and paste your new signature there.</li>
                        <em style="margin-top:15px; display:block; opacity:0.5;">(For Windows users, CTRL key is the ⌘ key)</em>
                    </ol>
                </code>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-xl-7 text-center">
                <div style="margin-top:40px;background: rgba(255,255,255,0.6); padding: 30px 20px; min-height:400px;border-radius:4px;">

                    <div class="row" style="margin-top:20px;">
                        <div class="col-md-6">
                            <small style="color:#601327; opacity:0.5;text-transform:uppercase; font-size:9px;letter-spacing:2px;">Plaza store signatures:</small>
                            <ul>
                                <li v-for="(post, index) in posts" v-if="post.fields.retailStore == null || post.fields.retailStore == false" :key="index">
                                    <div style="margin-top:20px;">
                                        <nuxt-link :to="'team/'+post.fields.slug" style="color: #601327;text-decoration:none;display:inline-block;">
                                            <strong style="display:block;line-height:12px;">{{ post.fields.name }}</strong><span style="font-size:9px; line-height:9px;opacity:0.5;">({{post.fields.jobTitle}})</span>
                                        </nuxt-link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <small style="color:#601327; opacity:0.5;text-transform:uppercase; font-size:9px;letter-spacing:2px;">Retail store signatures:</small>
                            <ul>
                                <li v-for="(post, i) in posts" v-if="post.fields.retailStore == true" :key="i">
                                    <div style="margin-top:20px;">
                                        <nuxt-link :to="'retail/'+post.fields.slug" style="color: #601327;text-decoration:none;display:inline-block;">
                                            <strong style="display:block;line-height:12px;">{{ post.fields.name }}</strong><span style="font-size:9px; line-height:9px;opacity:0.5;">({{post.fields.jobTitle}})</span>
                                        </nuxt-link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { createClient } from '~/plugins/contentful.js';
    import logo from '~/assets/logo.gif';

    const client = createClient();

    export default {
        head() {
            return {
                titleTemplate: 'Plaza Cellars — Email Signatures',
                link: [
                  { rel: "stylesheet", href: "/bootstrap.css" }
                ]
            }
        },
        data() {
            return {
                loading: false,
                logo
            }
        },

        asyncData({ env }) {
          return Promise.all([
            // fetch the owner of the blog
            client.getEntries({
              'sys.id': env.CTF_PERSON_ID,
            }),
            // fetch all blog posts sorted by creation date
            client.getEntries({
              content_type: env.CTF_BLOG_POST_TYPE_ID,
              order: '-sys.createdAt',
            }),
          ])
            .then(([posts]) => {
              // return data that should be available
              // in the template
              return {
                posts: posts.items,
              };
            })
            .catch(console.error);
        },
      };
</script>

<style media="screen">
ul {list-style: none;padding: 0;margin: 0;}
body {padding-bottom: 40px;background: #fafafa;}
video {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    position: fixed;
    z-index: 1;
}
.overlay {
    position: fixed;
    z-index: 2;
    background: #fafafa;
    left: 0;right: 0;bottom: 0;top: 0;
}

.container {
    position: relative;
    z-index: 3;
}
</style>
