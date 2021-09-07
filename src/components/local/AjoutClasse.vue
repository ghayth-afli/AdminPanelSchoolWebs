<template>
    <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h4 class="page-title">Ajouter un Classe</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <form>
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

                            


                            <div class="form-group">
                                <label>selectionner les matiers:</label>
                                <div class="col-lg-10">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="checkbox"> Arabe
                                        </label>
                                    </div>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="checkbox"> Histoire
                                        </label>
                                    </div>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="checkbox"> GEo
                                        </label>
                                    </div>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="checkbox"> fr
                                        </label>
                                    </div>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="checkbox"> GEo
                                        </label>
                                    </div>
                                </div>
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
  name: "AjoutClasse",

};
</script>