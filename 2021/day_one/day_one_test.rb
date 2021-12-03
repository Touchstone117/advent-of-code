# frozen_string_literal: true

require 'env'

module DayOneInput
  def self.practice
    File.readlines("#{__dir__}/input_practice.txt")
  end

  def self.real
    File.readlines("#{__dir__}/input_real.txt")
  end
end

class DayOneTest < MiniTest::Test
  def test_day_one_part_one_practice
    assert_equal 7, DayOne.new(DayOneInput.practice).solve
  end

  def test_day_one_part_one_real
    assert_equal 1215, DayOne.new(DayOneInput.real).solve
  end
end

class DayOne
  def initialize(input)
    @input = input
  end

  def solve
    @output = []
    @input.length.times do |i|
      first = if i.zero?
                nil
              else
                @input[i - 1]
              end

      second = @input[i]

      @output << depth_change(first, second)
    end

    # @output.length.times do |i|
    #   a = "#{@input[i].strip} (#{@output[i].strip})\n"
    #   File.write('out.txt', a, mode: 'a')
    # end

    count[:increased]
  end

  def count
    increased = 0
    decreased = 0

    @output.each do |value|
      case value
      when 'N/A'
        next
      when 'increased'
        increased += 1
      when 'decreased'
        decreased += 1
      else
        raise 'broke'
      end
    end

    puts "increased #{increased} + decreased #{decreased}"
    { increased: increased, decreased: decreased }
  end

  def depth_change(first, second)
    return 'N/A' if first.nil? || second.nil?

    return 'increased' if first.to_i < second.to_i
    return 'decreased' if first.to_i > second.to_i

    raise 'Broken'
  end
end
