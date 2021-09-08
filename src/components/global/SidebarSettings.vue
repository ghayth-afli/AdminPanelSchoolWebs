<template>

    <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div class="sidebar-menu">
                    <ul>
                        <li>
                           <router-link to="/"><i class="fa fa-home back-icon"></i>De retour</router-link>
                        </li>
                        <li class="menu-title">Paramètres</li>
                        <li>
                            <router-link to="/settings" >Paramètres d'ecole</router-link>
                        </li>
                        <li>
                            <router-link to="/settings/theme" >Réglage des thèmes</router-link>
                        </li>
                                              
                        <li>
                            <router-link to="/settings/changepassword" >Changer le mot de passe </router-link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>

</template>

<script>

export default {
  name: "SidebarSettings",
};
</script>
