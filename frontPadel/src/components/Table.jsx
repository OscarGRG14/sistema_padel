import "./Table.css";
import axios from "axios";
import { brackets16 } from "../utils/brackets16";
import { brackets08 } from "../utils/brackets08";
import { brackets04 } from "../utils/brackets04";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Table() {
  const [test, setTest] = useState();
  const [players, setPlayers] = useState([]);
  const [participant, setParticipant] = useState([]);

  useEffect(() => {
    const fetchPlayers = () => {
      axios
        .get("http://localhost:5000/users")
        .then((response) => {
          setPlayers(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchPlayers();
    async function render() {
      const data = brackets16;
      window.bracketsViewer.render(
        {
          stages: data?.stage,
          groups: data?.group,
          rounds: data?.round,
          matches: data?.match,
          matchGames: [],
          participants: data?.participant,
        },
        {
          customRoundName: (info, t) => {
            if (info.fractionOfFinal === 1 / 2)
              return `${t(`abbreviations.${info.group}`)} Semi Finals`;
          },
          selector: "#example",
          participantOriginPlacement: "before",
          separatedChildCountLabel: true,
          showSlotsOrigin: true,
          showLowerBracketSlotsOrigin: true,
          highlightParticipantOnHover: true,
        }
      );
      window.bracketsViewer.onMatchClicked = (match) => {
        console.log(match);
      };
    }
    render();
  }, []);

  // const handleAddPlayers = () => {
  //   let newParticipant = [];

  //   players.forEach((item) => {
  //     newParticipant.push({
  //       id: item.id,
  //       tournament_id: 0,
  //       name: item.nombre,
  //     });
  //   });
  //   setParticipant(newParticipant);

  //   if (participant?.length === 4) {
  //     brackets04.participant = participant;
  //     setTest(brackets04);
  //   }
  //   if (participant?.length === 8) {
  //     brackets08.participant = participant;
  //     setTest(brackets08);
  //   }
  //   if (participant?.length === 16) {
  //     brackets16.participant = participant;
  //     setTest(brackets16);
  //   }

  //   async function render() {
  //     window.bracketsViewer.render(
  //       {
  //         stages: test?.stage,
  //         groups: test?.group,
  //         rounds: test?.round,
  //         matches: test?.match,
  //         matchGames: [],
  //         participants: test?.participant,
  //       },
  //       {
  //         // This is optional.
  //         customRoundName: (info, t) => {
  //           // You have a reference to `t` in order to translate things.
  //           // Returning `undefined` will fallback to the default round name in the current language.

  //           if (info.fractionOfFinal === 1 / 2)
  //             return `${t(`abbreviations.${info.group}`)} Semi Finals`;
  //         },
  //         selector: "#example",
  //         participantOriginPlacement: "before",
  //         separatedChildCountLabel: true,
  //         showSlotsOrigin: true,
  //         showLowerBracketSlotsOrigin: true,
  //         highlightParticipantOnHover: true,
  //       }
  //     );
  //     window.bracketsViewer.onMatchClicked = (match) => {
  //       console.log(match);
  //     };
  //   }
  //   render();
  // };

  // const updateBrackets = (e, value) => {
  //   const property = value;
  //   const number = parseInt(e.currentTarget.value);
  //   property.id = number;
  // };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* <button className="btn-brackets" onClick={() => handleAddPlayers()}>
        Sortear Jugadores
      </button>
      <div>
        {test?.match?.map((item, value) => {
          return (
            <ul className="list-option">
              <input
                ref={input}
                type="text"
                value={item?.opponent1?.id}
                onChange={(e) => updateBrackets(e, item?.opponent1)}
              />
              <input
                ref={input}
                type="text"
                value={item?.opponent2?.id}
                onChange={(e) => updateBrackets(e, item?.opponent2)}
              />
            </ul>
          );
        })}
      </div> */}
      <div id="example" className="brackets-viewer"></div>
    </motion.div>
  );
}

export default Table;
