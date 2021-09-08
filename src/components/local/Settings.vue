<template>
<div class="page-wrapper">

    <div class="content container-fluid">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <form>
                            <h3 class="page-title">Paramètres d'ecole </h3>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Nom d'école <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" value="Preadmin">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Personne de contact</label>
                                        <input class="form-control " value="Daniel Porter" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Addresse</label>
                                        <input class="form-control " value="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403" type="text">
                                    </div>
                                </div>
                                
                                <div class="col-sm-6 col-md-6 col-lg-3">
                                    <div class="form-group">
                                        <label>Ville </label>
                                        <input class="form-control" value="Sherman Oaks" type="text">
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6 col-lg-3">
                                    <div class="form-group">
                                        <label>État</label>
                                        <select class="form-control">
                                            <option>Ariana</option>
                                            <option>Béja</option>
                                            <option>Ben Arous</option>
                                            <option>Bizerte</option>
                                            <option>Gabes</option>
                                            <option>Jendouba</option>
                                            <option>Kairouan</option>
                                            <option>Kasserine</option>
                                            <option>Kebili</option>
                                            <option>La Manouba</option>
                                            <option>Le Kef</option>
                                            <option>Mahdia</option>
                                            <option>Médenine</option>
                                            <option>Monastir</option>
                                            <option>Nabeul</option>
                                            <option>Sfax</option>
                                            <option>Sidi Bouzid</option>
                                            <option>Siliana</option>
                                            <option>Sousse</option>
                                            <option>Tataouine</option>
                                            <option>Tozeur</option>
                                            <option>Tunis</option>
                                            <option>Zaghouan</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6 col-lg-3">
                                    <div class="form-group">
                                        <label>Code postal</label>
                                        <input class="form-control" value="91403" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input class="form-control" value="danielporter@example.com" type="email">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Numéro de téléphone</label>
                                        <input class="form-control" value="818-978-7102" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Numéro de portable</label>
                                        <input class="form-control" value="818-635-5579" type="text">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Fax</label>
                                        <input class="form-control" value="818-978-7102" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>URL de site web</label>
                                        <input class="form-control" value="https://www.example.com" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 text-center m-t-20">
                                    <button type="button" class="btn btn-primary btn-lg">Sauvegarder &amp; Mettre à jour</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
</div>
</template>

<script>
export default {
  name: "Settings",

};
</script>