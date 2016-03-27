var isy = require('./isy.js');

var ISYProgram = function(isy, id, name, running, enabled, lastRunTime, lastFinishTime) {
    this.isy = isy;
    this.id = id;
    this.name = name;
    this.running = running;
    this.enabled = enabled;
    this.lastRunTime = lastRunTime||null;
    this.lastFinishTime = lastFinishTime||null;
}

ISYProgram.prototype.markAsChanged = function() {
    this.lastChanged = new Date();
}

ISYProgram.prototype.run = function(onComplete) {
    this.isy.sendProgramCommand(this.id, 'run', function(success) {
      onComplete(success);
    })
}

ISYProgram.prototype.runThen = function(onComplete) {
    this.isy.sendProgramCommand(this.id, 'runThen', function(success) {
      onComplete(success);
    })
}

ISYProgram.prototype.runElse = function(onComplete) {
    this.isy.sendProgramCommand(this.id, 'runElse', function(success) {
      onComplete(success);
    })
}

ISYProgram.prototype.stop = function(onComplete) {
    this.isy.sendProgramCommand(this.id, 'stop', function(success) {
      onComplete(success);
    })
}

ISYProgram.prototype.enable = function(onComplete) {
    this.isy.sendProgramCommand(this.id, 'enable', function(success) {
      onComplete(success);
    })
}

ISYProgram.prototype.disable = function(onComplete) {
    this.isy.sendProgramCommand(this.id, 'disable', function(success) {
      onComplete(success);
    })
}

ISYProgram.prototype.enableRunAtStartup = function(onComplete) {
    this.isy.sendProgramCommand(this.id, 'enableRunAtStartup', function(success) {
      onComplete(success);
    })
}

ISYProgram.prototype.disableRunAtStartup = function(onComplete) {
    this.isy.sendProgramCommand(this.id, 'disableRunAtStartup', function(success) {
      onComplete(success);
    })
}

exports.ISYProgram = ISYProgram;