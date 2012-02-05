var current_work = "CheckIt";
var last_active = 0;

function portfolio_imageloaded(){
//	console.log("loaded");
	$('.cornice > img').show();
}

function portfolio_image(index){
	
	$('.cornice > img').hide();
//	return;
	
    if (current_work === "CheckIt"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/checkit/uno.jpg");
        if (index === 1) $('.cornice > img').attr("src","/images/work/checkit/due.jpg");
        if (index === 2) $('.cornice > img').attr("src","/images/work/checkit/tre.jpg");
    }else if (current_work === "Wemobi"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/wemobi/uno.jpg");
        if (index === 1) $('.cornice > img').attr("src","/images/work/wemobi/due.jpg");
        if (index === 2) $('.cornice > img').attr("src","/images/work/wemobi/tre.jpg");
    }else if (current_work === "Chariots"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/chariots/uno.jpg");
        if (index === 1) $('.cornice > img').attr("src","/images/work/chariots/due.jpg");
        if (index === 2) $('.cornice > img').attr("src","/images/work/chariots/tre.jpg");
    }else if (current_work === "Sdf"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/sdf/uno.jpg");
        if (index === 1) $('.cornice > img').attr("src","/images/work/sdf/due.jpg");
        if (index === 2) $('.cornice > img').attr("src","/images/work/sdf/tre.jpg");
    }else if (current_work === "Serena"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/serena/uno.jpg");
        if (index === 1) $('.cornice > img').attr("src","/images/work/serena/due.jpg");
        if (index === 2) $('.cornice > img').attr("src","/images/work/serena/tre.jpg");
    }else if (current_work === "Mavigex"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/mavigex/uno.jpg");
        if (index === 1) $('.cornice > img').attr("src","/images/work/mavigex/uno.jpg");
        if (index === 2) $('.cornice > img').attr("src","/images/work/mavigex/uno.jpg");
    }
    
    $('.indicator > a:eq('+last_active+') > span').removeClass('active');
    $('.indicator > a:eq('+index+') > span').addClass('active');
    last_active = index;
}

function change_work(work){
	//alert (current_work === work);
    if (current_work === work) return;
    
    current_work = work;
    
    $('#wemobi_div').removeClass("selected");
    $('#checkit_div').removeClass("selected");
	$('#chariots_div').removeClass("selected");
	$('#sdf_div').removeClass("selected");	
	$('#serena_div').removeClass("selected");
	$('#mavigex_div').removeClass("selected");
    
    if (work === "Wemobi") $('#wemobi_div').addClass("selected");
    else if (work === "CheckIt") $('#checkit_div').addClass("selected");
	else if (work === "Chariots") $('#chariots_div').addClass("selected");
	else if (work === "Sdf") $('#sdf_div').addClass("selected");
	else if (work === "Serena") $('#serena_div').addClass("selected");
	else if (work === "Mavigex") $('#mavigex_div').addClass("selected");
    
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
	else if (current_work === "Serena") return "<span style='font-size: 18px'>Serena Cevenini</span>";
	else if (current_work === "Mavigex") return "Mavigex";
    else return "";
}

function getCommitment(){
    if (current_work === "CheckIt") return "Myself";
    else if (current_work === "Wemobi" || current_work === "Mavigex") return "<a href='http://www.mavigex.com' target='_blank'>Mavigex S.r.l.</a>";
	else if (current_work === "Chariots") return "Myself & my friends";
	else if (current_work === "Sdf") return "Squadra dei Falchi association";
	else if (current_work === "Serena") return "Serena Cevenini";
	else if (current_work === "Mavigex") return "Mavigex";
    else return "";
}

function getYearCommitment(){
    if (current_work === "CheckIt") return "2011";
    else if (current_work === "Wemobi") return "2011";
	else if (current_work === "Chariots") return "2007";
	else if (current_work === "Sdf") return "2009";
	else if (current_work === "Serena") return "2012 (still under construction)";
	else if (current_work === "Mavigex") return "2009-2010";
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
    }else if (current_work === "Serena") {
        $('#link_commitment').attr('href','http://www.serenacevenini.com/');
        $('#link_commitment').text("http://www.serenacevenini.com/");
        //return "<a href='http://www.mavigex.com' target='_blank'>Mavigex S.r.l.</a>";
    }else if (current_work === "Mavigex") {
        $('#link_commitment').attr('href','http://www.mavigex.com/');
        $('#link_commitment').text("http://www.mavigex.com/");
        //return "<a href='http://www.mavigex.com' target='_blank'>Mavigex S.r.l.</a>";
    }
}

function getDescription(){
    if (current_work === "CheckIt") return "<br/>CheckIt! is a web application that can help you to manage your daily routine: you can use ToDo List to save what you have to do."+
    				"You can also use Accounting section to track your finance and see your money.";
    else if (current_work === "Wemobi") return "<br/>WeMobi is the mobile brand of Mavigex.";
	else if (current_work === "Chariots") return "<br/>Website of Chariots of Fire, a group of friends that enjoy making videos!";
	else if (current_work === "Sdf") return "<br/>Squadra dei Falchi website.";
	else if (current_work === "Serena") return "<br/>Website of photographer Serena Cevenini.";
	else if (current_work === "Mavigex") return "<br/>I have worked two years for a company called Mavigex. I was responsible of the entire mobile applications"+
	" creation process in HTML5, Android and iOS platforms. I also managed websites and I occasionally dealt with backend technologies as RubyOnRails and PHP.<br/><br/>"+
	"Some of my works at Mavigex: &nbsp;&nbsp;<br/><br/>"+
	"Spreaker Android application - <br/> Bluvacanze Android/iOS Sencha application - <br/> Salvacontatti Sencha - <br/> i-SnowPark iOS application - <br/>";
    else return "";
}

function getTecnologies(){
    if (current_work === "CheckIt") return "Chrome, HTML5, CSS3, JQuery, Javascript, ChromeWebStore, RubyOnRails, MongoDb";
    else if (current_work === "Wemobi") return "HTML5, CSS3, JQuery, Javascript, PHP, Canvas";
    else if (current_work === "Chariots") return "HTML, CSS, PHP, Flash";
	else if (current_work === "Sdf") return "HTML, CSS, PHP, Mysql";
	else if (current_work === "Serena") return "HTML, CSS, Ruby on Rails, Mysql, Flickr";
	else if (current_work === "Mavigex") return "HTML5, CSS, Javascript, Sencha, JQuery, Android, ObjectiveC, PHP, Ruby on Rails, Mysql, Git, PhoneGap";
    else return "";
}