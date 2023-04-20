move();

var entidade = {

    



}

function move(){

    let p = document.getElementById("animated");//elemento inimigo
    let c = document.getElementById("coin");//elemento player?
    posP = startPos(0,0);//definie a posição do inimigo para o canto superior esquerdo
    posC = startPos(randoRange(0,400-30), randoRange(0,400-30));//posicionamento aleatório em um ponto do quadrado amarelo
    console.log(posP);
    console.log(posC);
    updatePos(posP,posC, c, p);//atualiza a posição

    id = setInterval(frame, 0.0007);//onde a magia acontece : ), 2 é um bom valor

    function frame() {
       if(posP[0] == posC[0] && posP[1] == posC[1]){//detecta se a posição do inimigo é igual a posição do player
            posC = startPos(randoRange(0,400-30), randoRange(0,400-30));//joga o player para um ponto aleatório
       } else{
           
            if(posP[0] < posC[0]){//se o player estiver abaixo de mim
                posP[0]++;//vou para baixo
            }else if(posP[0] > posC[0]){//se o player estiver acima de mim
                posP[0]--;//vou para cima
            }

            if(posP[1] < posC[1]){//se o player estiver a minha direita
                posP[1]++;//vou para a direita
            }else if(posP[1] > posC[1]){//se o player estiver a minha esquerda
                posP[1]--;//vou para a esquerda
            }
            updatePos(posP,posC, c, p);//atualiza a posição dos elementos
        }

    


}}