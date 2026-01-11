import React, { useEffect, useState } from "react";
import { Trophy, Crown, Medal } from "lucide-react";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const savedLeaderboard = localStorage.getItem("leaderboardData");

    if (savedLeaderboard) {
      setLeaderboard(JSON.parse(savedLeaderboard));
    } else {
      // Demo data
      setLeaderboard([
        { name: "Soham", points: 240 },
        { name: "Yash", points: 190 },
        { name: "Aarav", points: 160 },
        { name: "Meera", points: 120 },
        { name: "Riya", points: 90 },
      ]);
    }
  }, []);

  const sortedLeaderboard = [...leaderboard].sort(
    (a, b) => b.points - a.points
  );

  const getRankIcon = (index) => {
    if (index === 0) return <Crown className="text-yellow-500" size={28} />;
    if (index === 1) return <Medal className="text-gray-400" size={26} />;
    if (index === 2) return <Medal className="text-amber-700" size={26} />;
    return (
      <span className="text-lg font-bold text-gray-500">#{index + 1}</span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Trophy size={36} className="text-yellow-500" />
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
            Leaderboard
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {sortedLeaderboard.map((user, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-6 py-5 transition-all hover:scale-[1.02]
                ${
                  index === 0
                    ? "bg-yellow-50 dark:bg-yellow-900/20"
                    : index === 1
                    ? "bg-gray-50 dark:bg-gray-800/40"
                    : index === 2
                    ? "bg-amber-50 dark:bg-amber-900/20"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  {getRankIcon(index)}
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {user.name}
                  </span>
                </div>

                <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                  {user.points} pts
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
          Keep grinding. Consistency beats motivation.
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
