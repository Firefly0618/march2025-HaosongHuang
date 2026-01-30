import { title } from "@/components/primitives";

export default function RecipePage() {
  return (
    <div>
      <h1 className={title()}>Recipe</h1>
      <body>
        <div className="flex p-5">
          <p className="p-5 border-solid border-4 border-cyan-200">Pancake</p>
          <p className="p-5 border-solid border-4 border-cyan-200">
            Scrambled Egg
          </p>
          <p className="p-5 border-solid border-4 border-cyan-200">Sandwich</p>
          <p className="p-5 border-solid border-4 border-cyan-200">
            Bowl of Cereal
          </p>
          <p className="p-5 border-solid border-4 border-cyan-200">Brownie</p>
        </div>
        <h4>Pancakes</h4>
        <p>Ingredient: Flour, Sugar, Salt, Butter, Milk, Syrup, Egg</p>
        <img
          alt="Pancake"
          height="300"
          src="https://i2.wp.com/duesouth.media/wp-content/uploads/2019/03/Pancake-recipe.jpg?fit=1989%2C1800&ssl=1"
          width="500"
        />
        <p>Step make Pancakes</p>
        <p>
          1. get ingredients 2. mix flour, sugar, salt in a bowl 3. in another
          bowl mix mlik, butter, egg 4. combine the ingredient in both bowl 5.
          cook the pancake 6.put syrup on it and enjoy eating it
        </p>
        <hr />
        <h4>Scrambled Egg</h4>
        <p>Ingredient: Egg, Salt, Black pepper</p>
        <img
          alt="Egg"
          height="300"
          src="https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1.jpg"
          width="500"
        />
        <p>Step to make Scrambled Egg</p>
        <p>
          1. mix the egg white and yolk 2. put all ingredient on a hot pan 3.
          after around 2-3 minutes take it out of pan and enjoy it
        </p>
        <hr />
        <h4>Sandwich</h4>
        <p>Ingredient: Bread, Cheese, Tomato, Ham, Lettuces</p>
        <img
          alt="Sandwich"
          height="300"
          src="https://th.bing.com/th/id/R.8e6b10bf1c4a56d9cd5299f8bd18c673?rik=%2f%2ftlLa1hckSAzQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fsandwich-hd-png-sandwich-png-transparent-image-1750.png&ehk=AwJR2KzkKY1nq36izgogRj%2f2teMxiC7TwsyDt4GfG88%3d&risl=&pid=ImgRaw&r=0"
          width="500"
        />
        <p>Step to make sandwich</p>
        <p>
          1. get all ingredient ready 2. put ingredient in between 2 pieces of
          brea 3. eat it
        </p>
        <hr />
        <h4>Bowl of Cereal</h4>
        <p>Ingredient: Cereal, Milk</p>
        <img
          alt="Cereal"
          height="300"
          src="https://ak9.picdn.net/shutterstock/videos/1007745649/thumb/8.jpg"
          width="500"
        />
        <p>Step make bowl of cereal</p>
        <p>
          1. get all ingredient ready 2. mix all ingreident in a bowl 3. eat it
        </p>
        <hr />
        <h4>Brownie</h4>
        <p>Ingredient: Butter, Sugar. Egg. Coco powder</p>
        <img
          alt="Brownie"
          height="300"
          src="https://iheartrecipes.com/wp-content/uploads/2015/03/IMG_0060-e1427515689544.jpg"
          width="500"
        />
        <p>Step make brownie</p>
        <p>
          1. gather all ingreidents 2. mix all ingredients 3. put in a square
          shape container 4. put in oven and bake it 5. eat it after its ready
        </p>
      </body>
    </div>
  );
}
