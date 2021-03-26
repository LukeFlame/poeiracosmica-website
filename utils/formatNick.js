/* eslint-disable radix */

// Function that formats nicknames, is here because it is reused
function formatNick(nick, n) {
  // If the nickname size exceeds n, cut the nickname
  if (nick.length > parseInt(n)) return nick.substring(parseInt(n) + 1, 0);
  return nick;
}

export default formatNick;
