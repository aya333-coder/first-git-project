const tab=[3,7,2,11,4]
console.log(tab)
for(i=0;i<tab.lenght-1;i++){
    for (j=0 ;j<tab.lenght-1.-i;j++){
        if(tab[j]>tab[j+1]){
            let temp= tab[j];
            tab[j]=tab[j+1];
            tab[j+1]=temp
        }
    }
}
console.log(tab)
