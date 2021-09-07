<template>
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
      <div id="sidebar-menu" class="sidebar-menu">
        <ul>
          <li class="menu-title">Main</li>
          <li class="actived">
            <router-link to="/"
              ><i class="fa fa-dashboard"></i> Dashboard</router-link
            >
          </li>
          <li>
            <a href="chat.html"
              ><i class="fa fa-comments" aria-hidden="true"></i> Chat
              <span class="badge bg-primary pull-right">5</span></a
            >
          </li>

          <li class="submenu">
            <a href="javascript:void(0);"
              ><i class="fa fa-address-card" aria-hidden="true"></i>
              <span>Contacts</span> <span class="menu-arrow"></span
            ></a>
            <ul >
              <li>
               <router-link to="/profes"><span>Les profes</span></router-link>
              </li>
              <li>
               <router-link to="/parents"><span>Les parents</span></router-link>
              </li>
            </ul>
          </li>

          <li>
            <router-link to="/eleves"
              ><i class="fa fa-ticket" aria-hidden="true"></i>Les
              eleves</router-link
            >
          </li>

          <li>
            <router-link to="/classes"
              ><i class="fa fa-tasks" aria-hidden="true"></i>Les
              classes</router-link
            >
          </li>
          <li>
           <router-link to="/moyennes"
              ><i class="fa fa-th" aria-hidden="true"></i> les moyennes</router-link
            >
          </li>

          <li>
            <router-link to="/emploi"
              ><i class="fa fa-calendar" aria-hidden="true"></i> Les emplois</router-link
            >
          </li>

          <li class="submenu">
            <a href="#"
              ><i class="fa fa-commenting-o" aria-hidden="true"></i>
              <span> Blog</span> <span class="menu-arrow"></span
            ></a>
            <ul class="list-unstyled" style="display: none">
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blog-details.html">Blog View</a></li>
              <li><a href="add-blog.html">Add Blog</a></li>
              <li><a href="edit-blog.html">Edit Blog</a></li>
            </ul>
          </li>

          <li>
            <a href="settings.html"
              ><i class="fa fa-cog" aria-hidden="true"></i> Settings</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
