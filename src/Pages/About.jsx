export default function About() {
  return (
    <div className="about">
      <div className="title">
        <h2>About Xo Game</h2>{" "}
      </div>
      <div className="about-container">
        <section>
          <p>
            Tic-tac-toe (American English), noughts and crosses (Commonwealth
            English), or Xs and Os (Canadian or Irish English) is a
            paper-and-pencil game for two players who take turns marking the
            spaces in a three-by-three grid with X or O. The player who succeeds
            in placing three of their marks in a horizontal, vertical, or
            diagonal row is the winner. It is a solved game, with a forced draw
            assuming best play from both players.
          </p>
        </section>
        <section>
          <h4>Names</h4>
          <p>
            In American English, the game is known as "tic-tac-toe". It may also
            be spelled "tick-tack-toe", "tick-tat-toe", or "tit-tat-toe".
            <br />
            In Commonwealth English (particularly British, South African,
            Indian, Australian, and New Zealand English), the game is known as
            "noughts and crosses", alternatively spelled "naughts and crosses".
            This name derives from the shape of the marks in the game (i.e the X
            and O); "nought" is an older name for the number zero, while "cross"
            refers to the X shape. While the term "nought. is now less commonly
            used, the name "noughts and crosses" is still preferred over the
            American name "tic-tac-toe" in these countries. <br />
            Sometimes, tic-tac-toe (where players keep adding "pieces") and
            three men's morris (where pieces start to move after a certain
            number have been placed) are confused with each other
          </p>
        </section>
        <section>
          <h4>Gameplay</h4>
          <p>
            Tic-tac-toe is played on a three-by-three grid by two players, who
            alternately place the marks X and O in one of the nine spaces in the
            grid. <br />
            There is no universally agreed rule as to who plays first, but in
            this article the convention that X plays first is used. Players soon
            discover that the best play from both parties leads to a draw.
            Hence, tic-tac-toe is often played by young children who may not
            have discovered the optimal strategy. <br />
            Because of the simplicity of tic-tac-toe, it is often used as a
            pedagogical tool for teaching the concepts of good sportsmanship and
            the branch of artificial intelligence that deals with the searching
            of game trees. It is straightforward to write a computer program to
            play tic-tac-toe perfectly or to enumerate the 765 essentially
            different positions (the state space complexity) or the{" "}
            <b>26,830 possible games</b> up to rotations and reflections (the
            game tree complexity) on this space. If played optimally by both
            players, the game always ends in a draw, making tic-tac-toe a futile
            game. The game can be generalized to an m,n,k-game, in which two
            players alternate placing stones of their own color on an m-by-n
            board with the goal of getting k of their own color in a row.
            Tic-tac-toe is the 3,3,3-game. Harary's generalized tic-tac-toe is
            an even broader generalization of tic-tac-toe. It can also be
            generalized as an nd game, specifically one in which n equals 3 and
            d equals 2. It can be generalised even further by playing on an
            arbitrary incidence structure, where rows are lines and cells are
            points. Tic-tac-toe's incidence structure consists of nine points,
            three horizontal lines, three vertical lines, and two diagonal
            lines, with each line consisting of at least three points.
          </p>
        </section>
        <section>
          <h4>How does mayza Work ?</h4>
          <p>
            It's all about some calculation, you just have tow possibilities to
            draw, but you can win, because after X be in one of the corners that
            will be easy for <b>Mayza</b> to force Your second move by try to
            get a fast win but when you block, You don't have any more chance
            because Myza will force you to lose by making a double attack if you
            block one of them you simply get the other one, so your first move
            decide will you draw or lose there is just two line to draw against
            Myza , and many line he can bet you so be careful, also <b>Mayza</b>{" "}
            has calculate all the possibilities after any move you did , if you
            find something wrong or he doesn't response Please contact as to fix
            that problem.
            <br /> Our Email : <i>mayza@info.com</i>
          </p>
        </section>
      </div>
    </div>
  );
}
