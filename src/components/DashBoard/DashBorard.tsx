import * as React from "react";
import List from "../Members/List"
const Dashboard = () => {
  return (
    <>
      <header className={'m-1'}>
        <h1>Bookit App</h1>
      </header>

      <main className={"d-flex"} role="main">
        <aside className={'m-1'} >
          <nav>
            <ul>
              <li>
                <a>Account</a>
              </li>
              <li>
                <a>Members</a>
              </li>
              <li><a>Plans</a></li>
              <li><a>Programs</a></li>
            </ul>
          </nav>
        </aside>
        <section className={'m-1'}>
          Members List
          <List/>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
