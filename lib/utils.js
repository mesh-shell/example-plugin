/**
 * Utility functions for example-plugin plugin
 */

/**
 * Get current timestamp formatted as ISO string
 * @returns {string} Formatted timestamp
 */
function getTimestamp() {
  return new Date().toISOString();
}

/**
 * Format a number with leading zeros
 * @param {number} num - The number to format
 * @param {number} size - The desired string length
 * @returns {string} Formatted number with leading zeros
 */
function padNumber(num, size) {
  let s = num.toString();
  while (s.length < size) s = '0' + s;
  return s;
}

/**
 * Format a date in a human-readable format
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
  const d = date || new Date();
  return `${d.getFullYear()}-${padNumber(d.getMonth() + 1, 2)}-${padNumber(d.getDate(), 2)} ${padNumber(d.getHours(), 2)}:${padNumber(d.getMinutes(), 2)}`;
}

/**
 * Generate a random ID
 * @param {number} length - Length of the ID
 * @returns {string} Random ID
 */
function generateId(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}

module.exports = {
  getTimestamp,
  padNumber,
  formatDate,
  generateId
};
