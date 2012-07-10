var current_work = "CheckIt";
var last_active = 0;
var index_active = 0;

$(document).ready(function(){
	change_work(works[0]);
	
	$('#on_off').click(function(){
		if ($('#floating').height() > 100){
			move_floating(40,"Open");
		}else{
			move_floating(210,"Close");
		}
	});
});

function move_floating(height, text){
	$('#floating').animate({
    	height: height
  	}, 500, function() {
    // Animation complete.
		$('#on_off').html(text);
 	});
}

function portfolio_imageloaded(){
	$('#carousel > img').show();
}

var works = ['Comunichiamo','Wemobi','Mavigex','Serena','Aclick', 'Sdf'];

function rightCarousel(){
	if (index_active == 5) {
		index_active = 0;
	}else index_active++;
	change_work(works[index_active]);
}

function leftCarousel(){
	if (index_active == 0) index_active = 5;
	else index_active--;
	change_work(works[index_active]);
}

function portfolio_image(index){
	
//	if (last_active == index) return;
	
	$('#carousel > img').hide();
	$('#carousel > img').attr("src","");
//	return;
	
    if (current_work === "CheckIt"){
        if (index === 0) $('#carousel > img').attr("src","/images/work/checkit/uno.jpg");
        if (index === 1) $('#carousel > img').attr("src","/images/work/checkit/due.jpg");
        if (index === 2) $('#carousel > img').attr("src","/images/work/checkit/tre.jpg");
    }else if (current_work === "Wemobi"){
        if (index === 0) $('#carousel > img').attr("src","/images/work/wemobi/uno.jpg");
        if (index === 1) $('#carousel > img').attr("src","/images/work/wemobi/due.jpg");
        if (index === 2) $('#carousel > img').attr("src","/images/work/wemobi/tre.jpg");
    }else if (current_work === "Aclick"){
        if (index === 0) $('#carousel > img').attr("src","/images/work/aclick/uno.jpg");
        if (index === 1) $('#carousel > img').attr("src","/images/work/aclick/due.jpg");
        if (index === 2) $('#carousel > img').attr("src","/images/work/aclick/tre.jpg");
    }else if (current_work === "Sdf"){
        if (index === 0) $('#carousel > img').attr("src","/images/work/sdf/uno.jpg");
        if (index === 1) $('#carousel > img').attr("src","/images/work/sdf/due.jpg");
        if (index === 2) $('#carousel > img').attr("src","/images/work/sdf/tre.jpg");
    }else if (current_work === "Serena"){
        if (index === 0) $('#carousel > img').attr("src","/images/work/serena/uno.jpg");
        if (index === 1) $('#carousel > img').attr("src","/images/work/serena/due.jpg");
        if (index === 2) $('#carousel > img').attr("src","/images/work/serena/tre.jpg");
    }else if (current_work === "Mavigex"){
        if (index === 0) $('#carousel > img').attr("src","/images/work/mavigex/uno.jpg");
        if (index === 1) $('#carousel > img').attr("src","/images/work/mavigex/uno.jpg");
        if (index === 2) $('#carousel > img').attr("src","/images/work/mavigex/uno.jpg");
    }else if (current_work == "Comunichiamo"){
		if (index === 0) $('#carousel > img').attr("src","/images/work/cc/uno.jpg");
        if (index === 1) $('#carousel > img').attr("src","/images/work/cc/due.jpg");
        if (index === 2) $('#carousel > img').attr("src","/images/work/cc/tre.jpg");
	}
    
    $('#indication > a:eq('+last_active+') > span').removeClass('active');
    $('#indication > a:eq('+index+') > span').addClass('active');
    last_active = index;
}

function change_work(work){
	//alert (current_work === work);
    if (current_work === work) return;
    
    current_work = work;
    
	/*$('#cc_div').removeClass("selected");
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
	else if (work === "Mavigex") $('#mavigex_div').addClass("selected");*/
    
    portfolio_image(0);
    
    $('#title_work').html(getTitle());
    $('#commitment').html(getCommitment());
    updateLink();
    $('#technologies').html(getTecnologies());
    $('.description').html(getDescription());
	$('#year_commitment').html(getYearCommitment());
}

function getTitle(){
    if (current_work === "CheckIt") return "CheckIt!";
    else if (current_work === "Wemobi") return "Wemobi";
	else if (current_work === "Aclick") return "A click for two";
	else if (current_work === "Sdf") return "<span style='font-size: 18px'>Squadra dei Falchi</span>";
	else if (current_work === "Serena") return "<span style='font-size: 18px'>Serena Cevenini</span>";
	else if (current_work === "Mavigex") return "Mavigex";
	else if (current_work === "Comunichiamo") return "Comuni-Chiamo";
    else return "";
}

function getCommitment(){
    if (current_work === "CheckIt") return "Myself";
    else if (current_work === "Wemobi" || current_work === "Mavigex") return "<a href='http://www.mavigex.com' target='_blank'>Mavigex S.r.l.</a>";
	else if (current_work === "Aclick") return "Serena Cevenini & Alice Coppola";
	else if (current_work === "Sdf") return "Squadra dei Falchi association";
	else if (current_work === "Serena") return "Serena Cevenini";
	else if (current_work === "Mavigex") return "Mavigex";
	else if (current_work === "Comunichiamo") return "Comuni-Chiamo Srl.";
    else return "";
}

function getYearCommitment(){
    if (current_work === "CheckIt") return "2011";
    else if (current_work === "Wemobi") return "2011";
	else if (current_work === "Aclick") return "2012";
	else if (current_work === "Sdf") return "2009";
	else if (current_work === "Serena") return "2012 (still under construction)";
	else if (current_work === "Mavigex") return "2009-2010";
	else if (current_work === "Comunichiamo") return "2012";
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
    }else if (current_work === "Aclick") {
        $('#link_commitment').attr('href','http://www.aclickfortwo.com');
        $('#link_commitment').text("http://www.aclickfortwo.com");
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
    }else if (current_work === "Comunichiamo") {
        $('#link_commitment').attr('href','http://www.comuni-chiamo.com/');
        $('#link_commitment').text("http://www.comuni-chiamo.com/");
        //return "<a href='http://www.mavigex.com' target='_blank'>Mavigex S.r.l.</a>";
    }
}

function getDescription(){
    if (current_work === "CheckIt") return "<br/>CheckIt! is a web application that can help you to manage your daily routine: you can use ToDo List to save what you have to do."+
    				"You can also use Accounting section to track your finance and see your money.";
    else if (current_work === "Wemobi") return "<br/>WeMobi is the mobile brand of Mavigex.";
	else if (current_work === "Aclick") return "<br/>Wedding & family photography.";
	else if (current_work === "Sdf") return "<br/>Squadra dei Falchi website.";
	else if (current_work === "Serena") return "<br/>Website of photographer Serena Cevenini.";
	else if (current_work === "Mavigex") return "<br/>I have worked two years for a company called Mavigex. I was responsible of the entire mobile applications"+
	" creation process in HTML5, Android and iOS platforms. I also managed websites and I occasionally dealt with backend technologies as RubyOnRails and PHP.&nbsp;&nbsp;"+
	"Some of my works at Mavigex: &nbsp;&nbsp;<br/>"+
	"Spreaker for Android - &nbsp;&nbsp; Bluvacanze Android/iOS Sencha - &nbsp;&nbsp; Salvacontatti Sencha - &nbsp;&nbsp; i-SnowPark iOS";
	else if (current_work === "Comunichiamo") return "<br/>Android version of the ComuniChiamo italian service.";
    else return "";
}

function getTecnologies(){
    if (current_work === "CheckIt") return "Chrome, HTML5, CSS3, JQuery, Javascript, ChromeWebStore, RubyOnRails, MongoDb";
    else if (current_work === "Wemobi") return "HTML5, CSS3, JQuery, Javascript, PHP, Canvas";
    else if (current_work === "Aclick") return "HTML, CSS, Ruby on Rails, Mysql, ActiveAdmin";
	else if (current_work === "Sdf") return "HTML, CSS, PHP, Mysql";
	else if (current_work === "Serena") return "HTML, CSS, Ruby on Rails, Mysql, Flickr";
	else if (current_work === "Mavigex") return "HTML5, CSS, Sencha, JQuery, Android, ObjectiveC, PHP, RubyOnRails, Git, PhoneGap";
	else if (current_work === "Comunichiamo") return "Android, REST, HTML, CSS, Bitbucket, Git";
    else return "";
}

