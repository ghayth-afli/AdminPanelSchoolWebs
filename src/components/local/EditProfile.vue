<template>
    <div class="content container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page-title">Editer le Profile</h4>
                    </div>
                </div>
                <form>
                    <div class="card-box">
                        <h3 class="card-title">Basic Informations</h3>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="profile-img-wrap">
                                    <img class="inline-block" src="assets/img/user.jpg" alt="user">
                                    <div class="fileupload btn btn-default">
                                        <span class="btn-text">edit</span>
                                        <input class="upload" type="file">
                                    </div>
                                </div>
                                <div class="profile-basic">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-focus">
                                                <label class="control-label">Nom</label>
                                                <input type="text" class="form-control floating">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-focus">
                                                <label class="control-label">Prenom</label>
                                                <input type="text" class="form-control floating">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-focus">
                                                <label class="control-label">Date naissance</label>
                                                <div class="cal-icon">
                                                    <input class="form-control floating datetimepicker" type="text">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-focus select-focus">
                                                <label class="control-label">Sexe</label>
                                                <select class="select form-control floating">
                                                    <option>Homme</option>
                                                    <option>Femmme</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-box">
                        <h3 class="card-title">Informations de Contact</h3>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group form-focus">
                                    <label class="control-label">Address</label>
                                    <input type="text" class="form-control floating">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label class="control-label">L'état </label>
                                    <input type="text" class="form-control floating">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label class="control-label">Code Postal</label>
                                    <input type="text" class="form-control floating">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label class="control-label">Numero de telephone</label>
                                    <input type="text" class="form-control floating">
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div class="text-center m-t-20">
                        <button class="btn btn-primary btn-lg" type="button">Sauvegarder</button>
                    </div>
                </form>
            </div>
</template>

<script>
export default {
  name: "EditProfile",

};
</script>