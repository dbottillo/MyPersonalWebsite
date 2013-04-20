package com.danielebottillo.blog.model;

import android.os.Parcel;
import android.os.Parcelable;

public class Book implements Parcelable{

	public long id;
	public String title;
	public String subtitle;
	public String description;
	
	public static final Parcelable.Creator<Book> CREATOR = new Parcelable.Creator<Book>() {

		public Book createFromParcel(Parcel source) {
			return new Book(source);
		}

		@Override
		public Book[] newArray(int size) {
			// TODO Auto-generated method stub
			return new Book[size];
		}

	};
	
	public Book(Parcel in){
		readFromParcel(in);
	}
	
	public Book(long id, String title){
		this.id = id;
		this.title = title;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubtitle() {
		return subtitle;
	}

	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public int describeContents() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void writeToParcel(Parcel dest, int flags) {
		// TODO Auto-generated method stub
		dest.writeLong(id);
		dest.writeString(title);
		dest.writeString(subtitle);
	}
	
	public void readFromParcel(Parcel in){
		id = in.readLong();
		title = in.readString();
		subtitle = in.readString();
	}
	
	
}
