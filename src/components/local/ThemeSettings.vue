<template>
<div class="page-wrapper">
   <div class="content container-fluid">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <form class="form-horizontal">
                            <h4 class="page-title">Réglage des thèmes</h4>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Nom du site Web </label>
                                <div class="col-lg-9">
                                    <input name="website_name" class="form-control" value="Preadmin" type="text">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Logo léger </label>
                                <div class="col-lg-5">
                                    <input class="form-control" type="file">
                                    <span class="help-block">La taille d'image recommandée est de 40 px x 40 px </span>
                                </div>
                                <div class="col-lg-4">
                                    <div class="img-thumbnail pull-right"><img src="assets/img/logo.png" alt="" width="40" height="40"></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Favicon</label>
                                <div class="col-lg-5">
                                    <input class="form-control" type="file">
                                    <span class="help-block">La taille d'image recommandée est 16 px x 16 px                                     </span>
                                </div>
                                <div class="col-lg-4">
                                    <div class="settings-image img-thumbnail pull-right"><img src="assets/img/logo.png" class="img-responsive" width="16" height="16" alt=""></div>
                                </div>
                            </div>
                            <div class="m-t-20 text-center">
                                <button class="btn btn-primary btn-lg">Sauvegarder les modifications</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
</div>
<SidebarSettings/>
</template>

<script>
import SidebarSettings from "@/components/global/SidebarSettings.vue";
export default {
  name: "ThemeSettings",
    components: {
    SidebarSettings,
  },
};
</script>