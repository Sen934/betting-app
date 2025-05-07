# Starting the project

1. run `npm install`
2. create `.env.local` with variables from `.env.example`
3. run `npx msw init public --save`
4. `npm run dev`

# About

The project design is motivated by FSD (https://feature-sliced.github.io/documentation/)
It's a great design event for start ups in my opinion. I didn't exactly follow it here: i have different segments for example - but the idea is still present

## Notes
- i've used MSW library to mock server, it does the mocking on browser networking level, which make coding as close to reality as possible
- I've used ZOD and created quite many contracts, which might seem excessive. But they would be very useful if we'd add game editing for example
- The architecture can also be implied by various linters. I didn't do it here, because could take some time
- i've implemented much better looking UI in my career :D, i didn't focus on it here

![img.png](img.png)

