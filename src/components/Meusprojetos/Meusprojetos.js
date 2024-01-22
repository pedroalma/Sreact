import logo from '../../img/logo.png'
import './Meusprojetos.css';
 function Meusprojetos(){
    return(
      <div className='meus'>
      <div className='com'> <img src={logo} alt=""/> 
      <h1>Meus Projetos</h1> 
      </div>
      <div className='qua'>
          <div className='meum'>
            <h3>QuantumQuidditch</h3>
            <h2>____________________________</h2>
            <h4>Juntei-me à Liga de Quadribol
Quântico para transformar o esporte
mais emocionante do mundo bruxo
em uma experiência virtual inovadora.
O QuantumQuidditch é um projeto
que combina a adrenalina do
Quadribol com elementos de
realidade virtual e aumentada.
Prepare-se para montar sua vassoura
digital, lançar feitiços em 3D e
competir em partidas emocionantes,
tudo do conforto do seu computador.
Vamos levar o Quadribol a novos
patamares!</h4>
          </div>
          <div className='meum'>
            <h3>PotionCraft</h3>
            <h2>____________________________</h2>
            <h4>O PotionCraft é um assistente digital
que torna a arte de criar poções
mágicas mais acessível a todos os
bruxos e bruxas. Com uma extensa
biblioteca de receitas, guias
interativos e sugestões
personalizadas com base nas
preferências do usuário, este projeto
visa simplificar a prática de preparar
poções. Deixe-me guiar você através
do fascinante mundo das misturas
mágicas, onde cada linha de código é
um ingrediente para o sucesso
alquímico!
</h4>
          </div>
          <div className='meum'>
            <h3>CodeHogwarts</h3>
            <h2>____________________________</h2>
            <h4>Na CodeHogwarts, estou trabalhando
para levar a magia da programação
para todos os bruxos e bruxas. Este
projeto é uma escola de magia virtual
onde os estudantes podem aprender e
aprimorar suas habilidades em
desenvolvimento web, feitiços de
codificação e encantamentos de
programação. Com cursos interativos
e desafios mágicos, estamos
formando a próxima geração de
desenvolvedores bruxos!</h4>
          </div>
      </div>
      </div>
    )
 }
 export default Meusprojetos;