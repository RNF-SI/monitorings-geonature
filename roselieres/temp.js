
        let nb_tot = objForm.value.nb_seches + objForm.value.nb_vertes + objForm.value.nb_fleuries;
        if (objForm.value.type_releve == 'Quadrat') {
            bjForm.patchValue({nb_tot})
        }
        let diams=[objForm.value.d1 objForm.value.d2 objForm.value.d3 objForm.value.d4 objForm.value.d5];
        let diamsLenght =0
        let diamsSum =0
        for (const d of diams){
        if(d!=null){
            diamSum += d
            diamsLenght++
        }}
        let dmoy=(diamsSum/diamsLenght);
        objForm.patchValue({dmoy});
        let fragmentation = objForm.value.fragmentation.split('-').join('');
        if (fragmentation.lenght > 0) {
            fragmentation = fragmentation.match(new RegExp('.{11}' 'g')).join('-');
        }
        objForm.patchValue({fragmentation})