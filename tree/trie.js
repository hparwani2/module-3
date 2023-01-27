class TrieNode {
    constructor() {
        this.children = new Array(26);
        this.isEndOfWord = false;
    }
}

// and
class Trie {
    root = new TrieNode();
    insert(word) {

        let current = this.root;
        for(let i=0;i<word.length;i++) {
            let index = word[i].charCodeAt(0) - "a".charCodeAt(0);
            if(!current.children[index]) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        current.isEndOfWord = true;
    }
    search(word) {
        let current = this.root;
        for(let i=0;i<word.length;i++) {
            let index = word[i].charCodeAt(0) - "a".charCodeAt(0);
            if(!current.children[index]) {
                return false;
            }
            current = current.children[index];
        }
        if(!current.isEndOfWord) {
            return false;
        }
        return true;
    }
}

let trie = new Trie();
trie.insert('ant');
trie.insert('and');