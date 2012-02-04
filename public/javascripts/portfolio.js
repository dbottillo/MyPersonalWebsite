var current_work = "CheckIt";
var last_active = 0;

function portfolio_image(index){
    if (current_work === "CheckIt"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/checkit/uno.png");
        if (index === 1) $('.cornice > img').attr("src","/images/work/checkit/due.png");
        if (index === 2) $('.cornice > img').attr("src","/images/work/checkit/tre.png");
    }else if (current_work === "Wemobi"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/wemobi/uno.png");
        if (index === 1) $('.cornice > img').attr("src","/images/work/wemobi/due.png");
        if (index === 2) $('.cornice > img').attr("src","/images/work/wemobi/tre.png");
    }else if (current_work === "Chariots"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/chariots/uno.png");
        if (index === 1) $('.cornice > img').attr("src","/images/work/chariots/due.png");
        if (index === 2) $('.cornice > img').attr("src","/images/work/chariots/tre.png");
    }else if (current_work === "Sdf"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/sdf/uno.png");
        if (index === 1) $('.cornice > img').attr("src","/images/work/sdf/due.png");
        if (index === 2) $('.cornice > img').attr("src","/images/work/sdf/tre.png");
    }
    
    $('.indicator > a:eq('+last_active+') > span').removeClass('active');
    $('.indicator > a:eq('+index+') > span').addClass('active');
    last_active = index;
}

function change_work(work){
    if (current_work === work) return "";
    
    current_work = work;
    
    $('#wemobi_div').removeClass("selected");
    $('#checkit_div').removeClass("selected");
	$('#chariots_div').removeClass("selected");
	$('#sdf_div').removeClass("selected");	
    
    if (work === "Wemobi") $('#wemobi_div').addClass("selected");
    else if (work === "CheckIt") $('#checkit_div').addClass("selected");
	else if (work === "Chariots") $('#chariots_div').addClass("selected");
	else if (work === "Sdf") $('#sdf_div').addClass("selected");
    
    portfolio_image(0);
    
    $('#title_work').html(getTitle());
    $('#commitment').html(getCommitment());
    updateLink();
    $('#technologies').html(getTecnologies());
    $('#text_des_work').html(getDescription());
	$('#year_commitment').html(getYearCommitment());
}

function getTitle(){
    if (current_work === "CheckIt") return "CheckIt!";
    else if (current_work === "Wemobi") return "Wemobi";
	else if (current_work === "Chariots") return "Chariots";
	else if (current_work === "Sdf") return "<span style='font-size: 18px'>Squadra dei Falchi</span>";
    else return "";
}

function getCommitment(){
    if (current_work === "CheckIt") return "Myself";
    else if (current_work === "Wemobi") return "<a href='http://www.mavigex.com' target='_blank'>Mavigex S.r.l.</a>";
	else if (current_work === "Chariots") return "Myself & my friends";
	else if (current_work === "Sdf") return "Squadra dei Falchi association";
    else return "";
}

function getYearCommitment(){
    if (current_work === "CheckIt") return "2011";
    else if (current_work === "Wemobi") return "2011";
	else if (current_work === "Chariots") return "2007";
	else if (current_work === "Chariots") return "2009";
    else return "";
}

function updateLink(){
    if (current_work === "CheckIt") {
        $('#link_commitment').attr('href','http://www.checkithq.com');
        $('#link_commitment').text("http://www.checkithq.com");
    }else if (current_work === "Wemobi") {
        $('#link_commitment').attr('href','http://www.wemobi.it');
        $('#link_commitment').text("http://www.wemobi.it");
        //return "<a href='http://www.mavigex.com' target='_blank'>Mavigex S.r.l.</a>";
    }else if (current_work === "Chariots") {
        $('#link_commitment').attr('href','http://www.chariots.it');
        $('#link_commitment').text("http://www.chariots.it");
        //return "<a href='http://www.mavigex.com' target='_blank'>Mavigex S.r.l.</a>";
    }else if (current_work === "Sdf") {
        $('#link_commitment').attr('href','http://www.squadrafalchi.it/');
        $('#link_commitment').text("http://www.squadrafalchi.it/");
        //return "<a href='http://www.mavigex.com' target='_blank'>Mavigex S.r.l.</a>";
    }
}

function getDescription(){
    if (current_work === "CheckIt") return "CheckIt! is a web application that can help you to manage your daily routine: you can use ToDo List to save what you have to do."+
    				"You can also use Accounting section to track your finance and see your money.";
    else if (current_work === "Wemobi") return "WeMobi is the mobile brand of Mavigex.";
	else if (current_work === "Chariots") return "Chariots of Fire is a gruop of friends that make beatiful videoclip!";
	else if (current_work === "Sdf") return "Squadra dei Falchi website.";
    else return "";
}

function getTecnologies(){
    if (current_work === "CheckIt") return "Chrome, HTML5, CSS3, JQuery, Javascript, ChromeWebStore, RubyOnRails, MongoDb";
    else if (current_work === "Wemobi") return "HTML5, CSS3, JQuery, Javascript, PHP, Canvas";
    else if (current_work === "Chariots") return "HTML, CSS, PHP, Flash";
	else if (current_work === "Sdf") return "HTML, CSS, PHP";
    else return "";
}