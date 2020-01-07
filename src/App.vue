<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute :mini-variant.sync="mini" bottom temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>John Leider</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>fas fa-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      absolute
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
      </template>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Home", icon: "fas fa-home" },
      { title: "My Account", icon: "fas fa-user-circle" },
      { title: "Users", icon: "fas fa-users" }
    ],
    drawer: false,
    mini: false
  })
};
</script>
