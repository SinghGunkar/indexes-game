# Indexes

* Link to game can be found [here](https://gunkar-singh-indexes-game.herokuapp.com/)
* Match making is done automaticaly, you will be paried with the next person that opens the link above
* Use a web browser to view
* The app is deployed using Heroku's free tier and may time out during multiplayer

Built with
* Javascript
* Html
* Css
* Node
* [Two.js](https://two.js.org/)
* [Socket.io](https://socket.io/)

# Screenshots:

<div>
    <table>
      <tr >
          <td><img src="./screenshots/1-Screen Shot 2021-08-23 at 8.58.36 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/2-Screen Shot 2021-08-23 at 8.58.53 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/3-Screen Shot 2021-08-23 at 9.01.11 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/4-Screen Shot 2021-08-23 at 9.03.28 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/5-Screen Shot 2021-08-23 at 9.05.40 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/6-Screen Shot 2021-08-23 at 9.06.51 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/7-Screen Shot 2021-08-23 at 9.08.00 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/8-Screen Shot 2021-08-23 at 9.08.38 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/9-Screen Shot 2021-08-23 at 9.09.22 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/10-Screen Shot 2021-08-23 at 9.09.44 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/11-Screen Shot 2021-08-23 at 9.10.11 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/12-Screen Shot 2021-08-23 at 9.10.32 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/13-Screen Shot 2021-08-23 at 9.11.06 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/14-Screen Shot 2021-08-23 at 9.11.24 PM.png" ></td>
      </tr>
      <tr>
          <td><img src="./screenshots/15-Screen Shot 2021-08-23 at 9.11.35 PM.png" ></td>
      </tr>
    </table>
</div>

## Key takeaway(s)

Below are some lessons I learned during this project

<hr />

* Game logic should run on server side rather than on client side. 
   * Currently, game logic runs on client side. This is a security problem because someone could emit socket events to the server from the client and ruin any in progress games.
   * Socket requests are heavy and contain a lot of unnessary data which at times can cause the game to time out. This problem could have been mitigated if game logic was located on the server. Currently, the entire "state" of the game is sent with each network request which is not optimal for performance.
 * Statements in a function should belong to the same level of abstraction and functions should perform one task only. Doing so would maximize code reusaiblity and readability.
 * Methods are tighly coupled. Coupling could have been reduced by planning out game logic prior to development. 
