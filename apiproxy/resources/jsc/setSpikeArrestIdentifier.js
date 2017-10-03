if(content.getVariable(request.header.x-reset-spike-arrest-count)) {
    context.setVariable('spikeArrest.identifier', (new Date().getTime()));
}