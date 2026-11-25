import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: null };
  }

  toggleColor = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { clicked } = this.state;

    let style = {};
    if (clicked === true) {
      style = { backgroundColor: "lime", color: "black" };
    } else if (clicked === false) {
      style = { backgroundColor: "blue", color: "white" };
    }

    return (
      <main>
        <p className="clickable" style={style} onClick={this.toggleColor}>
          Дата та місце народження: 1 червня 2007 року, м. Київ
        </p>
        <p>
          Освіта: ліцей "Білоцерківський колегіум" м. Біла Церква, зараз
          навчаюсь у КПІ ім. Ігоря Сікорського.
        </p>
        <p>Хоббі:</p>
        <ul>
          <li>Футбол</li>
          <li>Програмування</li>
          <li>Кіберспорт</li>
          <li>Зал</li>
        </ul>
        <p>Улюблені фільми:</p>
        <ol>
          <li>"Інтерстеллар", 2014</li>
          <li>"Безславні виродки", 2009</li>
          <li>"Володар перснів: Повернення короля", 2003</li>
          <li>"Сім", 1995</li>
        </ol>
        <p>
          Одеса — місто на півдні України, адміністративний центр Одеської
          області та найбільший морський порт країни на березі Чорного моря.
          Місто засноване у 1794 році на місці фортеці Хаджибей. Історичний
          центр Одеси з 2023 року входить до списку Світової спадщини ЮНЕСКО.
        </p>
        <p>
          У 1794 році — заснування міста,<br />
          у 1819—1859 рр. — діяв режим порто-франко (вільної торгівлі),<br />
          у 1841 році — завершено будівництво Потьомкінських сходів,<br />
          у 1941 році — 73 дні оборони міста у Другій світовій війні,<br />
          а з 1991-го — у складі незалежної України.
        </p>
      </main>
    );
  }
}

export default Content;