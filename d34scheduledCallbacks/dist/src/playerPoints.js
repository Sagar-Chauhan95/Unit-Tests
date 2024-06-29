/*Be sure to use meaningful variable names.
Try to use map and reduce in your functions as appropriate. */
//The following objects record the season statistics for players on a basketball team.
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
export const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
export const teamStats = [player1, player2, player3];
/**
 *
 * @param {Object} player3 holding player stats
 * @returns {number} return total points of the player
 */
export function findTotalPlayerPoints(player3) {
    return player3.stats.reduce((sum, current) => sum + current.points, 0);
}
/**
 *
 * @param {Object} teamStats holding player stats
 * @param {number} num holding jersery number
 * @param num
 */
export function findTotalPointsByJersey(teamStats, num) {
    return teamStats.reduce((sum, current) => {
        if (current.jersey === num) {
            for (const result of current.stats) {
                sum += result.points;
            }
        }
        return sum;
    }, 0);
}
export function findTotalScores(teamStats) {
    return teamStats.map((players) => {
        let playerPoints = 0;
        for (const result of players.stats) {
            playerPoints += result.points;
        }
        let totalScores = { jersey: players.jersey, total: playerPoints };
        return totalScores;
    });
}
;
