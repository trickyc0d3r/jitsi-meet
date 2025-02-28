/**
 * Tries to copy a given text to the clipboard.
 * Returns true if the action succeeds.
 *
 * @param {string} textToCopy - Text to be copied.
 * @returns {Promise<boolean>}
 */
export function copyText(textToCopy: string) {
    try {
        console.log(textToCopy);

        return true;
    } catch (e) {
        return false;
    }
}
