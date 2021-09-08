<template>
<div class="page-wrapper">
    <div class="content container-fluid">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <h4 class="page-title">Changer le mot de passe </h4>
                        <form>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12">
                                    <div class="form-group">
                                        <label>Ancien mot de passe</label>
                                        <input type="password" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group">
                                        <label>Nouveau mot de passe</label>
                                        <input type="password" class="form-control">
                                    </div>
                                </div>
                                <div class="col-xs-12  col-sm-6">
                                    <div class="form-group">
                                        <label>Confirmez le mot de passe </label>
                                        <input type="password" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 text-center m-t-20">
                                    <button type="button" class="btn btn-primary btn-lg">Mettre à jour le mot de passe</button>
                                </div>
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
  name: "ChangePassword",
    components: {
    SidebarSettings,
  },
};
</script>