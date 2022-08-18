# React Typescript Setup 
We have created the ig-backend and connected it to our API

## In the terminal 

In the project directory, you can run:
`npx create-react-app ig-clone-react --template typescript`

## Click and Drag folder from the backend to the front-end 
Drag the folder `models` in the db folder in the `ig-clone-backend` project into the src folder in this project. 

### Keeping track of an array of type "Photo" from models above
```
const [photos, setPhotos] = useState <Photo[]> ([])
```

### Pull the ig-clone-backend photos from localhost:5001
```
  useEffect( () => {
    fetch("http://localhost:5001/photos")
    .then (res => res.json())
    .then ((data: Photo[] )=> {
      setPhotos(data)
    })
  }, [])
  ```