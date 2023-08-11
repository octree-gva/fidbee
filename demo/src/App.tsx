import { Fidbee } from "fidbee";
import "./App.css";

function App() {
  return (
    <>
      <p>
        Est ut quibusdam et quibusdam ut nam assumenda. Iste delectus aut rerum
        est. Labore vel similique ea totam. Quos sit alias illum expedita vel
        saepe iste quas. Est qui magnam aut et est autem qui magni. Est aliquid
        est repudiandae possimus consequatur veritatis inventore debitis.
        Dolores occaecati iure tenetur dolorem asperiores illo placeat. Et
        possimus dicta libero. Quo quis nihil et dolorem. Ea omnis tenetur sequi
        provident quod. Impedit id ea dolor est qui voluptate necessitatibus
        corrupti. Beatae consequatur illo qui quos ipsa quis. Labore eos
        adipisci quia laborum necessitatibus asperiores cumque. Perspiciatis sit
        dolorem natus et ducimus aperiam possimus. Consequatur animi voluptatem
        consequatur ut explicabo saepe quaerat qui. Nihil quos quod doloribus
        qui velit ea minus tempore. Ut atque fuga aut nam aut tempora. Nam sunt
        quidem dolor minima necessitatibus aut quia rerum. In est et illo itaque
        a. Voluptas numquam illum nihil sit rerum laboriosam voluptatem
        possimus. Tempore dolor velit vero corporis omnis non quia quidem.
        Suscipit ab eius voluptatem non similique repellendus dolorem. Est qui
        consequuntur a. Error voluptatem voluptas suscipit sapiente eos
        temporibus illum adipisci. Eveniet voluptatem aliquid doloremque
        voluptate nihil nobis et.
      </p>
      <center>
        <img src="/puppy.jpeg" />
      </center>
      <Fidbee
        webhookUrl="http://localhost:8080/notify"
        projectName="Demo Fidbee"
        userEmail="demo@fidbee.org"
        allowAnonymous
      />
    </>
  );
}

export default App;
