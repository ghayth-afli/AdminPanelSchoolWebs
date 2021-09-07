<template>
    <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h4 class="page-title">Ajouter un eleve</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <form>
                            <div class="form-group">
                                <label>Nom:</label>
                                <input class="form-control" type="text">
                            </div>

                            <div class="form-group">
                                <label>Prenom:</label>
                                <input class="form-control" type="text">
                            </div>

                            

                            <div class="form-group">
                                <label>Email:</label>
                                <input class="form-control" type="text">
                            </div>


                            <div class="form-group">
                                <label>Numero d'inscription</label>
                                <input class="form-control" type="text">
                            </div>

                            <div class="form-group">
                                <label>CIN (De parent):</label>
                                <input class="form-control" type="text">
                            </div>

                            <div class="form-group">
                                <label>Ville:</label>
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

                            <div class="form-group">
                                <label>Adresse</label>
                                <input class="form-control" type="text">
                            </div>

                            <div class="form-group">
                                <label>Code postal</label>
                                <input class="form-control" type="text">
                            </div>


                            <div class="form-group">
                                <label>Numero de telephone:</label>
                                <input class="form-control" type="text">
                            </div>

                            <div class="form-group">
                                <label class="display-block">Sexe:</label>
                                <label class="radio-inline">
                                    <input name="status" checked="checked" type="radio"> Homme
                                </label>
                                <label class="radio-inline">
                                    <input name="status" type="radio"> Femme
                                </label>
                            </div>

                            <div class="form-group">
                                <label>Niveau:</label>
                                <select class="form-control">
                                    <option>1er</option>
                                    <option>2eme</option>
                                    <option>3eme</option>
                                    <option>4eme</option>
                                    <option>5eme</option>
                                    <option>6eme</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Nom de classe:</label>
                                <select class="form-control">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <option>E</option>
                                    <option>F</option>
                                    <option>G</option>
                                    <option>H</option>
                                </select>
                            </div>
                            <div class="m-t-20 text-center">
                                <button class="btn btn-primary btn-lg">Ajouter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: "AjoutEleve",

};
</script>