<template>
<div class="page-wrapper">
            <div class="content container-fluid">
                    <div class="form-group">
                        <label>Emploi de temp</label>
                        <input class="form-control" type="file">
                    </div>

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

                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-btn">
                                        <button class="btn btn-primary" type="button">Ajouter</button>
                                    </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    </div>
</template>

<script>
export default {
  name: "AjoutEmploi",

};
</script>