function solution(letter) {
    const morse = { 
        '.-':'a',
        '-...':'b',
        '-.-.':'c',
        '-..':'d',
        '.':'e',
        '..-.':'f',
        '--.':'g',
        '....':'h',
        '..':'i',
        '.---':'j',
        '-.-':'k',
        '.-..':'l',
        '--':'m',
        '-.':'n',
        '---':'o',
        '.--.':'p',
        '--.-':'q',
        '.-.':'r',
        '...':'s',
        '-':'t',
        '..-':'u',
        '...-':'v',
        '.--':'w',
        '-..-':'x',
        '-.--':'y',
        '--..':'z'
    }
    // 모스 부호는 공백으로 나뉘어져있으므로, 공백을 기준으로 나눈 후 각 모스부호를 입력
    return letter.split(" ").map(a => morse[a]).join("")
}
