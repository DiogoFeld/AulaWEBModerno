// apply  uso do apply
// apply passa o contexto(this) e também passar os parametros em um VETOR

function SomaEImprime(n1,n2){
    console.log(this, + " " + n1+n2)
}

// SomaEImprime(1,2);
SomaEImprime.apply(1,[1,2])
