function superbowlWin(record){
    var win = record.find(entry => entry.result === "W");
    return win ? win.year : undefined;
}

