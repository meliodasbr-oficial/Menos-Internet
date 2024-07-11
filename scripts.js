document.getElementById('energyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const hours = parseFloat(document.getElementById('hours').value);
    const power = parseFloat(document.getElementById('power').value);
    const costPerKWh = parseFloat(document.getElementById('costPerKWh').value);

    if (isNaN(hours) || isNaN(power) || isNaN(costPerKWh) || costPerKWh <= 0) {
        alert('Por favor, insira valores válidos para horas de uso, potência e custo por kWh.');
        return;
    }

    const energyConsumption = (hours * power) / 1000;
    const cost = energyConsumption * costPerKWh;

    const resultText = `Você consumiu ${energyConsumption.toFixed(2)} kWh de energia. Isso custará aproximadamente R$ ${cost.toFixed(2)} no mês.`;


    document.getElementById('resultText').innerText = resultText;

    let savingsTips = '';

    if (energyConsumption > 250) {
        savingsTips += '-> Implemente o hábito de desconectar dispositivos após o uso para economizar energia.\n';
    }

    if (energyConsumption > 200) {
        savingsTips += '-> Desligue completamente aparelhos em standby, que consomem energia mesmo desligados.\n';
    }

    if (energyConsumption > 150) {
        savingsTips += '-> Utilize programadores de tempo para desligar automaticamente aparelhos não essenciais durante a noite.\n';
    }

    if (energyConsumption > 100) {
        savingsTips += '-> Considere substituir aparelhos mais antigos por modelos mais eficientes.\n';
    }

    if (cost > 150) {
        savingsTips += '-> Eduque os membros da família sobre práticas de economia de energia para um impacto duradouro.\n';
    }

    if (cost > 100) {
        savingsTips += '-> Utilize cortinas e persianas para controlar a entrada de luz solar e reduzir o uso de ar condicionado.\n';
    }

    if (power > 1000) {
        savingsTips += '-> Use aparelhos de alta potência com moderação para reduzir o consumo.\n';
    }

    if (power < 500 && hours > 4) {
        savingsTips += '-> Considere utilizar lâmpadas LED de baixo consumo para iluminação prolongada.\n';
    }

    if (costPerKWh > 0.5) {
        savingsTips += '-> Verifique se há planos tarifários alternativos que possam reduzir o custo por kWh.\n';
    }

    if (power < 300 && hours > 6) {
        savingsTips += '-> Prefira utilizar o modo econômico em aparelhos eletrônicos sempre que possível.\n';
    }

    if (costPerKWh < 0.3) {
        savingsTips += '-> Opte por eletrodomésticos com etiqueta energética A ou superior para maior eficiência.\n';
    }

    if (costPerKWh > 0.7) {
        savingsTips += '-> Reduza o tempo de uso de aquecedores elétricos, optando por métodos mais eficientes.\n';
    }

    if (hours > 8 && power > 500) {
        savingsTips += '-> Realize manutenção regular em equipamentos para garantir eficiência energética ao longo do tempo.\n';
    }

    if (costPerKWh > 0.6) {
        savingsTips += '-> Considere a instalação de painéis solares para geração de energia renovável.\n';
    }

    if (power > 800) {
        savingsTips += '-> Avalie a possibilidade de automatizar o controle de iluminação e equipamentos para evitar desperdícios.\n';
    }

    document.getElementById('finalResult').innerText = savingsTips;
});
